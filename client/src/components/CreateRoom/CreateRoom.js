// hook from library
import { useAsync } from "react-async";
// custom components
import RoomSettings from './RoomSettings';
import LoadingDisplay from './LoadingDisplay';

// You can use async/await or any function that returns a Promise
const loadPlayer = async ({ playerId }, { signal }) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${playerId}`, { signal })
  if (!res.ok) throw new Error(res.statusText)
  return res.json()
}

export default function CreateRoom() {
  const { data, error, isPending } = useAsync({ promiseFn: loadPlayer, playerId: 2 })
  if (isPending) return <LoadingDisplay />
  if (error) return `Something went wrong: ${error.message}`
  if (data)
    return (
      <div>
        <strong>Player data:</strong>
        <pre>{JSON.stringify(data, null, 2)}</pre>
        <RoomSettings />
      </div>
    )
  return null
}