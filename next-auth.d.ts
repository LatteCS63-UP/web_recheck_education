// next-env.d.ts
import 'next-auth';

declare module 'next-auth' {
  interface User {
    organizationID: number;
    organizationPersonID: number;
  }

  interface Session {
    organizationID: number;
    organizationPersonID: number;

    user?: {
      organizationID: number;
      organizationPersonID: number;
    } 
  }

}