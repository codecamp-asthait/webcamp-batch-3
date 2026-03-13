import { forwardRef, useCallback, useEffect, useEffectEvent, useMemo, useState ,useRef, useImperativeHandle  } from 'react'
import './App.css'

const BIG_List = Array.from({ length: 2500 }, (_, i) => `Item ${i + 1}`)

interface PlainRowProps {
  item: string,
  onSelect: (item: string)=> void
}

function PlainRow({ item, onSelect }: PlainRowProps) {
  'use memo'
  console.log("re render child")
  return(
    <li>
      {item} <button onClick={() => onSelect(item)}>Select me</button>
    </li>
  )
}

//React compiler -19 - , React rules //
//React rules are:
//1. Only call hooks at the top level. Don't call hooks inside loops, conditions, or nested functions.
//2. Only call hooks from React function components or custom hooks. Don't call hooks from regular JavaScript functions.
//3. Always use the same order of hooks in every component render. Don't call hooks conditionally or inside loops.
//  18.17 ,16 - react compiler (Problem , incrementally ) 

const MemorizedPlainRow = PlainRow

const Input = forwardRef<HTMLInputElement, { value: string, onChange: (value: string) => void }>(
  ({ value, onChange }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => {
    return {
      focusIntoChildren() {
        inputRef && inputRef.current && inputRef.current.focus();
      },
      scrollIntoView() {
        inputRef && inputRef.current && inputRef.current.scrollIntoView();
      },
    };
  }, []);

    return (
      <input ref={inputRef} value={value} onChange={(event) => onChange(event.target.value)} type="text" placeholder="Type to filter..." />
    )
  }
)

function App() {
  const [selectedItem, setSelectedItem] = useState<string>('')
  const [inputValue, setInputValue] = useState<string>('')
  const [roomId, setRoomId] = useState<string>('12345')
  const inputRef = useRef<any>(null)
  //useCallback

  //props
  //state
  // Parent render -> children rerender 
  const onSelect = useCallback((item: string) => {
    if(item === selectedItem) {
      setSelectedItem('')
      return
    }

    inputRef.current?.focusIntoChildren()
    
    setSelectedItem(item)
  }, [selectedItem])

  // const onSelect = (item: string) => {
  //   if(item === selectedItem) {
  //     setSelectedItem('')
  //     return
  //   }
  //   setSelectedItem(item)
  // }

  //i -> fn restult (calculative)
  //it -> fn result store
  //ite -> fn result store
  //item -> fn result store

  const filteredList = useMemo(()=>{
    return BIG_List.filter(item => item.toLowerCase().includes(inputValue.toLowerCase()))
  }, [inputValue])

  // const createConnection = (roomId: string) => {
  //   return {
  //     connect: () => console.log(`Connected to room ${roomId}`),
  //     disconnect: () => console.log(`Disconnected from room ${roomId}`)
  //   }
  // }

//   const onConnection = useEffectEvent(()=>[
//     showNotificaiton("connected" , theme)
//   ])

//   useEffect(() => {
//   const connection = createConnection(roomId); //create connection
//   // connection.on('connected', onConnected);
//   onConnection()
//   connection.connect();
//   return () => {
//     connection.disconnect();
//   }
// }, [roomId]);


  //useMemo -> store the result of a function and only recompute it when its dependencies change. It is used to optimize performance by avoiding unnecessary calculations on every render.
  //useCallback -> store a function definition and only recreate it when its dependencies change. It is used to prevent unnecessary re-renders of child components that depend on the function as a prop.

  return (
    <>
      <div>
        <input onChange={(event)=> setRoomId(event.target.value)} type="text" placeholder="Type room id..." />
      </div>
      <Input ref={inputRef} value={inputValue} onChange={setInputValue} />
      {selectedItem && <div>You selected: {selectedItem}</div>}
      <ul>
        {filteredList.map((item) => (
          //reference 
          <MemorizedPlainRow key={item} item={item} onSelect={onSelect} />
        ))}
      </ul>
    </>
  )
}

export default App
