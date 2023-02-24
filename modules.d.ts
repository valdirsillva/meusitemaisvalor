declare namespace NodeJS {
  export interface ProcessEnv {
      HOSTNAME: string | undefined;
      SMTP_SENDER: string | undefined;
      SMTP_HOST: string | undefined;
      SMTP_USER: string | undefined;
      SMTP_PASS: string | undefined;
      SMTP_PORT: number | undefined;
      SMTP_SECURE: boolean | undefined;

      APP_PORT: number | undefined;
      DOMAIN_ORIGIN: string | undefined;
  }
}