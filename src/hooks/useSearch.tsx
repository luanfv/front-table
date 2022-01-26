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
  setPeoples:any;
  PhoneFormat:any;
}


 const PeoplesContext = createContext<PeoplesContextData>(
  {} as PeoplesContextData
  );

export function PeoplesProvider({children} : PeoplesProviderProps){
  const [peoples, setPeoples] = useState<peoplesProps[]>([]);

  const PhoneFormat = (phone:string) =>{
    let array = phone.split('');
    array.splice(9,0, '-');
    array.splice(0,0, '+');
    array.splice(3,0,' ');
    array.splice(4,0,'(');
    array.splice(7,0,') ');

    array.join('')
    return array;
  }

  useEffect(()=>{
    api.get('/employess')
    .then(res=> setPeoples(res.data))
    console.log(peoples)
  },[])

  return (
    <PeoplesContext.Provider
    value={{
      peoples,
      setPeoples,
      PhoneFormat
      }}>
      {children}
    </PeoplesContext.Provider>
  )
}
export function useSearch(){
  const context = useContext(PeoplesContext)

  return context
}
