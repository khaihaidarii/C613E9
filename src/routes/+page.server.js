import { createClient } from '@supabase/supabase-js';

// USE THIS FOR DEV MODE
// import { SUPABASE_URL, SUPABASE_ANON_KEY } from '$env/static/private'; - This is for dev

// USE THIS FOR VERCEL DEPLOYMENT
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;

export const actions = {
	insert: async ({ request }) => {
		const form = await request.formData();

		const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

		const { error } = await supabase.from('emails').insert([
			{
				email: form.get('email')
			}
		]);

		if (error) {
			console.log(`failure to add ${form.get('email')} to our email list.`);
			return {
				success: false
			};
		} else {
			return {
				success: true
			};
		}
	}
};
