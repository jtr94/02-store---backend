import nodemailer from 'nodemailer';

export interface SendMailOptions {
  to: string | string[];
  subject: string;
  htmlBody: string;
  attachements?: Attachement[];
}

export interface Attachement {
  filename: string;
  path: string;
}

export class EmailService {

  private transporter;

  constructor(
    mailerService: string,
    mailerUser   : string,
    mailerPass   : string,
  ){
    this.transporter = nodemailer.createTransport( {
        service: mailerService,    
        auth: {
        user: mailerUser,
        pass: mailerPass,
        }
        });
}
  async sendEmail( options: SendMailOptions ): Promise<boolean> {

    const { to, subject, htmlBody, attachements = [] } = options;

    try {
        
      const sentInformation = await this.transporter.sendMail( {
        to: to,
        subject: subject,
        html: htmlBody,
        attachments: attachements,
      });

      return true;
    } catch ( error ) {
      return false;
    }

  }
}