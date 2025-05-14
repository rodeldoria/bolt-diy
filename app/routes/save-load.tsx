import { useState } from 'react';
import { saveCode, loadCode } from '@/lib/codeService';

export default function SaveLoadTest() {
  const [fileName, setFileName] = useState('TestFile.tsx');
  const [code, setCode] = useState('');
  const [status, setStatus] = useState('');

  const handleSave = async () => {
    setStatus('Saving...');
    await saveCode(fileName, code);
    setStatus('✅ Saved to Supabase!');
  };

  const handleLoad = async () => {
    setStatus('Loading...');
    const loaded = await loadCode(fileName);
    setCode(loaded ?? '');
    setStatus(loaded ? '✅ Loaded from Supabase!' : '⚠️ File not found.');
  };

  return (
    <div className="p-4 max-w-xl mx-auto space-y-4">
      <h1 className="text-xl font-bold">🧪 Supabase Save/Load Test</h1>

      <input
        className="w-full p-2 border rounded"
        value={fileName}
        onChange={(e) => setFileName(e.target.value)}
        placeholder="File name"
      />

      <textarea
        className="w-full h-48 p-2 border rounded font-mono"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Write your code here..."
      />

      <div className="flex space-x-2">
        <button className="bg-green-600 text-white px-4 py-2 rounded" onClick={handleSave}>
          Save
        </button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={handleLoad}>
          Load
        </button>
      </div>

      <p className="text-sm text-gray-500">{status}</p>
    </div>
  );
}
