import { cookies, draftMode } from 'next/headers';

const enableDraftMode = async () => {
  (await draftMode()).enable();

  // Fix for issue with iframe embeddings: https://github.com/vercel/next.js/issues/49927
  const cookiesStore = await cookies();

  const draft = cookiesStore.get('__prerender_bypass');
  const draftValue = draft?.value;

  if (draftValue) {
    cookiesStore.set({
      name: '__prerender_bypass',
      value: draftValue,
      httpOnly: true,
      path: '/',
      secure: true,
      sameSite: 'none',
    });
  }
};

export default enableDraftMode;
