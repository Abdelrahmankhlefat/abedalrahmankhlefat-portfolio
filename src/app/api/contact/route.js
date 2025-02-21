import Mailjet from 'node-mailjet';

export async function POST(req) {
  try {
    // Initialize Mailjet client
    const mailjet = Mailjet.apiConnect(process.env.MJ_APIKEY_PUBLIC, process.env.MJ_APIKEY_PRIVATE)
    const { name, email, message } = await req.json();
    // Send email request
    const request = mailjet.post('send', { version: 'v3' }).request({
      FromEmail: 'abedalrahmankhlefat@gmail.com',
      FromName: `${name}`,
      Recipients: [
        {
          Email: 'abedalrahmankhlefat@gmail.com',
          Name: 'Abed al Rahman Khlefat',
        },
      ],
      Subject: `New email from ${name} with email: ${email}`,
      'Text-part': `${message}`,
      'Html-part': `<p>${message}</p>`,
    });

    const response = await request;
    console.log('Email sent:', response.body);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Error connecting to Mailjet:', error.message);
    return new Response(JSON.stringify({ error: 'Something went wrong' }), { status: 500 });
  }
}
