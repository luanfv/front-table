import{createContext,useState,useEffect, useContext} from 'react';
import { api } from '../services/api';


interface peoplesProps {
  id: number;
  name: string;
  job: string;
  admission_date: string;
  phone: string;
  image: string;
}

interface PeoplesProviderProps{
  children: React.ReactNode;
}
interface PeoplesContextData {
  peoples:peoplesProps [];
}

type peoplesInput = Omit<peoplesProps, 'id' | 'admission_date' | 'phone' | 'image'>; 
 const PeoplesContext = createContext<PeoplesContextData>(
  {} as PeoplesContextData
  );

export function PeoplesProvider({children} : PeoplesProviderProps){
  const [peoples, setPeoples] = useState<peoplesProps[]>([]);

  useEffect(()=>{
    api.get('/employess')
    .then(res=> setPeoples(res.data))
    console.log(peoples)
  },[])
  return (
    <PeoplesContext.Provider value={{peoples}}>
      {children}
    </PeoplesContext.Provider>
  )
}
export function useSearch(){
  const context = useContext(PeoplesContext)

  return context 
}