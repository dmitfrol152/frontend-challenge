import { BASE_URL } from '@/shared/lib/constants/BASE_URL';
import type { CatsProps } from '../model/types';

export async function fetchCats(): Promise<CatsProps> {
  try {
    const response = await fetch(
      `${BASE_URL}/images/search?page=${page}&limit=${limit}`,
      {
        method: 'GET',
        headers: {
          'x-api-key':
            'live_cMFDEQrHD6I4TkadiZXLSlXW8sOAOCdg12FUfvCSGFpmksCarKIfGcrQeIO94aYw',
        },
      },
    );

    if (!response.ok) throw new Error('Error: response is failed');

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
