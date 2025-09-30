import { useUser } from '@clerk/clerk-react';
import React, { useEffect, useState } from 'react';
import { dummyPublishedCreationData } from '../assets/assets';
import { Heart } from 'lucide-react';
import axios from 'axios';
import { useAuth } from '@clerk/clerk-react';
import toast from 'react-hot-toast';

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;


const Community = () => {
  const [creations, setCreations] = useState([]);
  const { user } = useUser();
  const [loading, setLoading] = useState(true);
  const { getToken } = useAuth();



  const fetchCreations = async () => {
    try{
      setLoading(true);
      const {data} = await axios.get('/api/user/get-published-creations' ,{
        headers: {
          Authorization: `Bearer ${await getToken()}`
        }
      })
      if(data.success){
        setCreations(data.creation)
      }
      else{
        toast.error(data.message)
      }
    }catch(error){
      console.log(error)
      toast.error(error.response?.data?.message || error.message)
    } finally {
      setLoading(false);
    }
  };

  const likeCreation = async (id) => {
    try{
      const {data} = await axios.post('/api/user/get-user-likes',{id},{
        headers: {
          Authorization: `Bearer ${await getToken()}`
        } 
      })
      if(data.success){
        fetchCreations();
        toast.success(data.message);
      }else{
        toast.error(data.message)
      }

    }catch(error){
      console.log(error)
      toast.error(error.response?.data?.message || error.message)
    }
  }

  useEffect(() => {
    if (user) {
      fetchCreations();
    }
  }, [user]);

  

  return  !loading ? ( 

    <div className='flex-1 h-full flex flex-col gap-4 p-6'>
      <h2 className='text-2xl font-bold'>Creations</h2>
      <div className='bg-white h-full w-full rounded-xl overflow-y-scroll'>
        {creations.map((creation, index) => (
          <div
            key={index}
            className='relative group inline-block pl-3 pt-3 w-full sm:max-w-1/2 lg:max-w-1/3'
          >
            <img
              src={creation.content}
              alt=""
              className='w-full h-full object-cover rounded-lg'
            />
            <div className='absolute bottom-0 top-0 right-0 left-3 flex gap-2 items-end justify-end group-hover:justify-between p-3 group-hover:bg-gradient-to-b from-transparent to-black/80 text-white rounded-lg'>
              <p className='text-sm hidden group-hover:block'>{creation.prompt}</p>
              <div className='flex gap-1 items-center'>
                <p>{creation.likes.length}</p>
                <Heart onClick={() => likeCreation(creation.id)}
                  className={`min-w-5 h-5 hover:scale-110 cursor-pointer ${
                    creation.likes.includes(user.id) ? 'fill-red-500 text-red-600' : 'text-white'
                  }`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div className='flex-1 h-full flex justify-center items-center'>
      <div className='w-10 h-10 border-4 border-t-transparent border-blue-600 rounded-full animate-spin'></div>
    </div>
  )
};

export default Community;
