import { Wrapper } from '../styles/wrappers/Searchbar.jsx'
import { Input, Button } from '../assets/wrappers/SearchBar.jsx'

function Searchbar () {
  return (
    <Wrapper>
      <form style={{ 'width': '100%', 'height': '100%' }}>
        <Input
          type="text"/>
        <Button type="submit">
        </Button>
      </form>
    </Wrapper>
  )
}

export default Searchbar
