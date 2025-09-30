import React, { useState } from 'react';
import {  Scissors, Sparkles } from 'lucide-react';
import axios from 'axios';
import { useAuth } from '@clerk/clerk-react';
import toast from 'react-hot-toast';
import formData from 'form-data';

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const RemoveObject = () => {
  const [input, setInput] = useState(null);   
  const [object, setObject] = useState('');   
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState('');

  const {getToken} = useAuth()

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try{
      setLoading(true);

      if(object.split(' ').length>1){
        return toast.error("Please enter only one object to remove")
      }

      const formData = new FormData();
      formData.append("image", input);
      formData.append("object", object);

      const {data} = await axios.post('/api/ai/remove-image-object', formData, {
        headers: {
          Authorization: `Bearer ${await getToken()}`
        }
      });
      if(data.success){
        setContent(data.content);
      }else{
        toast.error(data.message)
      }
    } catch(error){
      toast.error(error.message)
    }
    setLoading(false);
  };

  return (
    <div className='h-full overflow-y-scroll p-6 flex items-start flex-wrap gap-4 text-slate-700'>
      {/* left col */}
      <form onSubmit={onSubmitHandler} className='w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200'>
        <div className='flex items-center gap-3'>
          <Sparkles className='w-6 text-[#4A7AFF]' />
          <h1 className='text-xl font-semibold'>Object Removal</h1>
        </div>
        <p className='mt-6 text-sm font-medium'>Upload image</p>
        <input
          onChange={(e) => setInput(e.target.files[0])}
          type="file"
          accept='image/*'
          className='w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300 text-gray-600'
          required
        />
        <p className='text-xs text-gray-500 font-light mt-1'>
          Supports JPG, PNG, and other image formats
        </p>

        <p className='mt-6 text-sm font-medium'>Describe object name to remove</p>
        <textarea
          onChange={(e) => setObject(e.target.value)}
          value={object}
          rows={4}
          className='w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300'
          placeholder='Describe what you want to see in the image...'
          required
        />

        <button disabled={loading} className='w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer'>
          {loading ? <span className='w-4 h-4 border-2 border-t-transparent border-white rounded-full animate-spin'></span> : <Scissors className='w-5' />}
          Remove background
        </button>
      </form>
      {/* Right col */}
      <div className='w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96'>
        <div className='flex items-center gap-3'>
          <Scissors className='w-5 h-5 text-[#FF4938]' />
          <h1 className='text-xl font-semibold'>Processed Image</h1>
        </div>

        {!content ? (
          <div className='flex-1 flex justify-center items-center'>
          <div className='text-sm flex flex-col items-center gap-5 text-gray-400'>
            <Scissors className='w-9 h-9' />
            <p>
              Upload an image and describe the object to remove, then click "Remove background" to get started
            </p>
          </div>
        </div>

        ) : (
          <div className='mt-3 h-full'>
            <img src={content} alt="Generated" className=' mt-3 w-full h-full object-contain rounded' />
          </div>

        )}
  
      </div>
    </div>
  );
};

export default RemoveObject;
