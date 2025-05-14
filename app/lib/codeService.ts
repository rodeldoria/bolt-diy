import supabase from './supabase';

export async function saveCode(fileName: string, content: string) {
  const { error } = await supabase
    .from('code_files')
    .upsert([{ file_name: fileName, content }]);

  if (error) {
    console.error('Save failed:', error.message);
  }
}

export async function loadCode(fileName: string): Promise<string | null> {
  const { data, error } = await supabase
    .from('code_files')
    .select('content')
    .eq('file_name', fileName)
    .single();

  if (error) {
    console.error('Load failed:', error.message);
    return null;
  }

  return data?.content ?? null;
}
