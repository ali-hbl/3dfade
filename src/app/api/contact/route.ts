import { NextResponse } from 'next/server';
import { sendContactEmail } from '../../../../actions/sendEmail';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone = '', project = '', budget = '', message } = body || {};

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: 'Les champs nom, email et message sont obligatoires.' },
        { status: 400 }
      );
    }

    await sendContactEmail({ name, email, phone, project, budget, message });

    return NextResponse.json({ message: 'Email envoyé avec succès !' });
  } catch (error) {
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { error: 'Le corps de la requête doit être un JSON valide.' },
        { status: 400 }
      );
    }

    const message = error instanceof Error ? error.message : 'Erreur inattendue lors de l’envoi.';
    return NextResponse.json(
      { error: 'Échec de l’envoi de l’email.', details: message },
      { status: 500 }
    );
  }
}
