
'use server';
/**
 * @fileOverview A flow for sending an email from the contact form.
 *
 * - sendEmail - A function that handles sending the contact form data.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { Resend } from 'resend';

const SendEmailInputSchema = z.object({
  fullName: z.string().describe('The full name of the person sending the message.'),
  company: z.string().optional().describe('The company the person works for.'),
  email: z.string().email().describe('The email address of the sender.'),
  subject: z.string().describe('The subject of the message.'),
  message: z.string().describe('The content of the message.'),
});

export type SendEmailInput = z.infer<typeof SendEmailInputSchema>;

const SendEmailOutputSchema = z.object({
  success: z.boolean(),
});
type SendEmailOutput = z.infer<typeof SendEmailOutputSchema>;

export async function sendEmail(
  input: SendEmailInput
): Promise<SendEmailOutput> {
  return sendEmailFlow(input);
}

const sendEmailFlow = ai.defineFlow(
  {
    name: 'sendEmailFlow',
    inputSchema: SendEmailInputSchema,
    outputSchema: SendEmailOutputSchema,
  },
  async (input) => {
    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
      await resend.emails.send({
        from: 'onboarding@resend.dev', // This must be a verified domain in Resend, 'onboarding@resend.dev' is for testing.
        to: 'arg.adarsh@gmail.com',
        subject: `New message from ${input.fullName}: ${input.subject}`,
        html: `
          <p><strong>Name:</strong> ${input.fullName}</p>
          <p><strong>Company:</strong> ${input.company || 'N/A'}</p>
          <p><strong>Email:</strong> ${input.email}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p>${input.message}</p>
        `,
      });

      return { success: true };
    } catch (error) {
      console.error('Error sending email with Resend:', error);
      return { success: false };
    }
  }
);
