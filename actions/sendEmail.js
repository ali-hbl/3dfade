import axios from 'axios';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { name, email, phone, project, budget, message } = req.body;

  try {
    const response = await axios.post('https://api.brevo.com/v3/smtp/email', {
      sender: {
        name: 'Votre Nom ou Nom du Portfolio',
        email: 'votre-email@domaine.com',
      },
      to: [
        {
          email: 'thirdfade@gmail.com',
        },
      ],
      subject: `Nouveau contact de ${name}`,
      htmlContent: `
        <h1>Formulaire de contact</h1>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${phone}</p>
        <p><strong>Type de projet :</strong> ${project}</p>
        <p><strong>Budget estimé :</strong> ${budget}</p>
        <p><strong>Message :</strong><br/>${message}</p>
      `,
    }, {
      headers: {
        'api-key': process.env.BREVO_API_KEY,
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
    });

    return res.status(200).json({ message: 'Email envoyé avec succès !', data: response.data });
  } catch (error) {
    console.error('Erreur envoi mail :', error);
    return res.status(500).json({ error: 'Échec de l’envoi de l’email', details: error.message });
  }
}
