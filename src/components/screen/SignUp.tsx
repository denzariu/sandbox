import { ReactElement, useContext, useState } from 'react'
import { useLazyQuery, useMutation } from '@apollo/client'
import { Field, Form, Formik } from 'formik'
import { GoogleCredentialResponse, GoogleLogin } from '@react-oauth/google'

import { JwtPayload, jwtDecode } from 'jwt-decode'
import { SignUpSchema } from '../utils/AuthSchema'
import Logo from '../../assets/logo.png'
import { ContentContext } from './ContentSwitch'
import { CREATE_ACCOUNT } from '../../GraphQL/Mutation'
import { __DEV__ } from '@apollo/client/utilities/globals'



////~~~ Clean-up! ~~~////


function SignUp(): ReactElement {
  
  const { toggleContent } = useContext(ContentContext)

  const [ popup, setPopup ] = useState<string>('');
  const [ credential, setCredential ] = useState<any>(undefined);
  const [ profile, setProfile ] = useState<any>(undefined);
  
  //@ts-ignore
  const [createAccount, {loadingC, errorC, dataC}] = useMutation(
    CREATE_ACCOUNT, 
    { variables: { email: "", password: "", first_name: "", last_name: "", credential: "" }}
  )

  const handleResponse = (response: GoogleCredentialResponse) => {
    //Set Credentials
    setCredential(response.credential)
    
    //Get Profile Info
    if (response.credential) {
      //Decode credentials
      var profileObject = jwtDecode<JwtPayload>(response.credential)
      setProfile(profileObject)

      //@ts-ignore
      if (!profileObject.email_verified) 
        setPopup("Email not verified.")
      else {
        //@ts-ignore
        setPopup(`Hold on ${profileObject.given_name}. Signing up with Google...`)
        onFormSubmit({credential: response.credential})
      }
      
      // onFormSubmit({})
    }
  };

  const handleErrorResponse = () => {
      setPopup("Error on Google auth.")
  };

  const signupAccount = async (values: any) => {
    
    const fields = { 
      email: values.email ?? "", 
      password: values.password ?? "", 
      first_name: values.first_name ?? "", 
      last_name: values.last_name ?? "",
      credential: values.credential ?? ""
    }
    console.log(fields)

    return createAccount({ variables: fields})
  }

  const onFormSubmit = async (values: any) => {
    console.log("Pressed submit. ")
    const signUp = await signupAccount(values)
    
    if (__DEV__)
      console.log(signUp)

    if (signUp && signUp.data && signUp.data.createAccount.successful) {
      // setLocation("/home"); // Redirect to /home
      setPopup(signUp.data.createAccount.message)
    }
    else if (!signUp)
      setPopup("Server is down.")
    else if (!signUp.data)
      setPopup("Error on request.")
    else
      setPopup(signUp.data.createAccount.message)
  }



  return (
    <div className="flex flex-1 h-screen bg-secondary tracking-tight align-middle items-center justify-center -m-4">
      <div className='fixed bottom-0 text-primary-content bg-red-600 right-0 p-2'>Design WIP</div>

      <div className='flex-1 flex flex-col sm:flex-row mx-8 lg:mx-52 sm:max-w-7xl justify-between border-2 border-primary-content bg-primary rounded-lg gap-x-4 p-4'>
        <div className='sm:flex-2 xl:flex-1 flex flex-col sm:flex-row sm:space-x-2'>

          <img src={Logo} className='h-12 w-12 self-center sm:self-start sm:p-2'/>

          <h1 className="text-2xl sm:text-4xl text-primary-content self-center sm:self-start flex-1 flex items-center font-medium leading-10">
            Sign Up
          </h1>
          
        </div>

        <Formik
          enableReinitialize
          validationSchema={SignUpSchema}
          initialValues={{
            first_name: profile ? profile.given_name : "",
            last_name: profile ? profile.family_name: "", 
            email: profile ? profile.email : "",
            password: "",
          }}
          onSubmit={async (values) => {
            onFormSubmit(values)
            // await new Promise((r) => setTimeout(r, 500));
          }}
        >
          {({ errors, touched }) => (
            
            <Form className='flex flex-1 flex-col sm:min-w-64 sm:border-r-2 sm:border-b-2 border-primary sm:bg-primary-content sm:p-8 lg:p-12 rounded-lg gap-y-2 sm:gap-y-4 justify-center'>
              
              <div className='hidden sm:flex sm:flex-col items-center self-center'>
                <GoogleLogin 
                  shape='pill'
                  size='medium' 
                  theme='outline' 
                  type='standard'
                  logo_alignment='center' 
                  // width={100} 
                  text='signin_with'
                  onSuccess={handleResponse} 
                  ux_mode='popup' //redirect?
                  onError={handleErrorResponse} 
                />
                <p className='relative bottom-[-1.6rem] px-4 bg-primary-content text-primary font-normal text-sm tracking-tighter pt-4 '>
                  or sign up with
                </p>
              </div>

              

              {/* First Name */}
              <div className='sm:border-t-2 sm:border-primary sm:pt-12'>
                {/* Popup / Warning */}
                <div className='top-16 left-0 text-red-400 text-right'>
                  {popup}
                </div>
                <span className='flex items-center justify-between'>
                  <label 
                    className="block text-sm font-medium leading-6 text-primary-content sm:text-primary"
                    htmlFor="first_name"
                  >
                    First Name
                  </label>
                  {errors.first_name && touched.first_name ? 
                    <div className='self-end text-red-500 font-medium'>{errors.first_name.toString()}</div>
                  : null}
                  </span>
                <Field 
                  id="first_name" 
                  name="first_name" 
                  placeholder="Frog"
                  className="w-full p-2 text-primary sm:text-primary-content bg-primary-content sm:bg-primary rounded-md shadow-sm ring-1 ring-inset ring-secondary focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary"
                />
              </div>

              {/* Last Name */}
              <div className=''>
                <span className='flex items-center justify-between'>
                  <label 
                    className="block text-sm font-medium leading-6 text-primary-content sm:text-primary"
                    htmlFor="last_name"
                  >
                    Last Name
                  </label>
                  {errors.last_name && touched.last_name ? 
                    <div className='self-end text-red-500 font-medium'>{errors.last_name.toString()}</div>
                  : null}
                  </span>
                <Field 
                  id="last_name" 
                  name="last_name" 
                  placeholder="McFrog"
                  className="w-full p-2 text-primary sm:text-primary-content bg-primary-content sm:bg-primary rounded-md shadow-sm ring-1 ring-inset ring-secondary focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary"
                />
              </div>

              {/* Email */}
              <div className=''>
                <span className='flex items-center justify-between'>
                  <label 
                    className="block text-sm font-medium leading-6 text-primary-content sm:text-primary"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  {errors.email && touched.email ? 
                    <div className='self-end text-red-500 font-medium'>{errors.email.toString()}</div>
                  : null}
                  </span>
                <Field 
                  id="email" 
                  name="email" 
                  placeholder="froggy@frogs.com"
                  className="w-full p-2 text-primary sm:text-primary-content bg-primary-content sm:bg-primary rounded-md shadow-sm ring-1 ring-inset ring-secondary focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary"
                />
              </div>
              
              {/* Password */}
              <div className=''>  
                <span className='flex items-center justify-between'>
                  <label 
                    className="block text-sm font-medium leading-6 text-primary-content sm:text-primary"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  {errors.password && touched.password ? 
                    <div className='self-end text-red-500 font-medium'>{errors.password}</div>
                  : null}
                </span>
                <Field 
                    id="password" 
                    name="password" 
                    placeholder=""
                    type="password"
                    className="w-full p-2 text-primary sm:text-primary-content bg-primary-content sm:bg-primary rounded-md shadow-sm ring-1 ring-inset ring-secondary focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary"
                />  
              </div>
                
              <span className='flex-row flex my-2 gap-x-2 items-center justify-start'>
                <button 
                  type='submit'
                  className='py-[0.15rem] flex-1 px-3 rounded-xl text-lg bg-secondary text-primary-content hover:text-primary border-2 border-secondary
                  transition-colors duration-150 hover:bg-primary-content'
                >
                  Sign Up
                </button>

                <div className='sm:hidden'>
                  <GoogleLogin
                    shape='circle'
                    size='medium' 
                    theme='filled_blue' 
                    type='icon'
                    logo_alignment='center' 
                    // width={100} 
                    text='signin_with'
                    onSuccess={handleResponse} 
                    ux_mode='popup' //redirect?
                    onError={handleErrorResponse} 
                  />
                </div>
                 
              </span>
              
              <div className='flex-[0.8] flex-col flex justify-end self-end'>
                <p className='text-sm text-primary-content sm:text-primary font-light'>Already have an account?</p>
                <a
                    href="#login" onClick={() => toggleContent('log-in')}
                    className=' text-primary-content sm:text-primary mt-1 self-end text-base transition-colors duration-150 hover:text-secondary'
                >
                  Log In
                </a>
              </div>
            </Form>
          )}
        </Formik>

        
      </div>
    </div>

  )
}

export default SignUp 
