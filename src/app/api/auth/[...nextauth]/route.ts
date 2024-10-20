import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentails',
            credentials: {
                PersonEmail: {label: "PersonEmail", type: "text"},
                Password: {label: "Password", type: "password"}
            },

            // credentials: {
            //   PersonEmail: {label: "PersonEmail", type: "text"},
            //   Password: {label: "Password", type: "password"}
            // },

            async authorize(credentials: any) {
                if (credentials.PersonEmail == '' && credentials.Password == '') {
                  throw new Error('Email_and_Password_not_input')
                }

                const res = await fetch(`http://localhost:5000/login/checkFormLogin`, {
                    method: 'POST',
                    body: JSON.stringify(credentials),
                    headers: { "Content-Type": "application/json" }
                })

                // const res = await fetch(`https://www.melivecode.com/api/login`, {
                //     method: 'POST',
                //     body: JSON.stringify(credentials),
                //     headers: { "Content-Type": "application/json" }
                // })

                const response = await res.json()
                // console.log(response)

                if (response.status_email_login) {

                  if(response.status_password_login) {
                    return response.user

                  } else {
                    console.log(response.status_password_login)
                    throw new Error('Password_login_false')

                  }

                } else {
                  console.log(response.status_email_login)
                  throw new Error('Email_login_false')

                }

                // throw new Error()

                // if (response.status === 'ok') {
                //   return response.user
                // }

                return null
            }
        })
    ],

    callbacks: {
      async jwt({token, user}) {
        if(user) {
          token.organizationPersonID = user.organizationPersonID
          token.organizationID = user.organizationID
        }

        return token
      },

      async session({session, token}) {
        if(token && session.user) {
          session.user.organizationPersonID = token.organizationPersonID as number
          session.user.organizationID = token.organizationID as number
        }
        return session
      }
    },
    
    pages: {
      signIn: '/testForm',
    },
})

export {handler as GET, handler as POST}