import { NumbersCollection } from './NumbersCollection'
import { CharactersCollection } from './CharactersCollection'
import { LinkedList } from './LinkedList'

const numbersCollection = new NumbersCollection([10, 3, -5, 0])
numbersCollection.sort()
numbersCollection.print()

const charactersCollection = new CharactersCollection('XaaaBc4Dx')
charactersCollection.sort()
charactersCollection.print()

const linkedList = new LinkedList()
linkedList.add(500)
linkedList.add(-10)
linkedList.add(-3)
linkedList.add(4)
linkedList.print()
