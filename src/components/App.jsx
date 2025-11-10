import { useEffect, useState } from 'react';
import './App.css'
import  Product from './Product'
import  Gallery from './Gallery'
import  MailBox from './MailBox'
import  Item from './Item'
import  List from './List'
import  Alert from './Alert'
import  Card from './Card'
import { IoBookOutline } from "react-icons/io5"
// import  CustomButton from './Button'
import  Button from './Button'
import Fruits from './Fruits'
import  ButtonEffect from './ButtonEffect'
import  Timer from './Timer'
import  LoginForm from './LoginForm'
import  SearchBar from './SearchBar'
import  LangSwitcher from './LangSwitcher'
import  FeedbackForm from './FeedbackForm'
import axios from 'axios';
import { ClimbingBoxLoader } from "react-spinners"
import { fetchArticlesWithTopic } from "../articles-api"
import { SearchForm } from './SearchForm'

///
import UseMemo from './useHooks/UseMemo'
import UseRef from './useHooks/UseRef'
import ComponentA from './useHooks/ComponentA'
import ComponentB from './useHooks/ComponentB'
///
import { UserMenu } from './UserMenu';
import { ThemeSwitcher } from './ThemeSwitcher';

export default function App() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  
    async function fetchArticles(topic) {
      try {
        setArticles([])
        setError(false)
        setLoading(true)
        const data = await fetchArticlesWithTopic(topic)
        setArticles(data)
      } catch {
        setError(true)
      } finally {
        setLoading(false)
      } 
    }


  const [catUrl, setCatUrl] = useState([])

  useEffect(() => {
    async function fetchCats() {
      const response = await axios.get(
        "https://api.thecatapi.com/v1/images/search"
      );
      // console.log(response)
      setCatUrl(response.data[0].url)
    }
    fetchCats()
  }, [])

  const [ clicks, setClicks ] = useState(0);
    
  const handleClick = () => {
    setClicks(clicks + 1)
  }
  const [showTimer, setShowTimer] = useState(true)

  // const handleLogin = (userData) => {
  //   console.log(userData)
  // }

  const [lang, setLang] = useState("pl")

  const [coffeeSize, setCoffeeSize] = useState("lg");

  const handleSizeChange = (evt) => {
    setCoffeeSize(evt.target.value);
    // console.log(coffeeSize)
  };

  const [hasAccepted, setHasAccepted] = useState(false)

  const handleAcceptChange = (evt) => {
    setHasAccepted(evt.target.checked)
  }

  return (
    <>
    <ThemeSwitcher />
    <hr />
    <UserMenu />
    <ComponentA />
    <hr />
    <ComponentB />
    <hr />
    <UseRef source="https://media.w3.org/2010/05/sintel/trailer.mp4"/>
    <hr />
    {/* <UseMemo /> */}
    <hr />

    <div>
      <h1>Search articles</h1>
      <SearchForm  onSearch={fetchArticles}/>
      {loading &&  <ClimbingBoxLoader />}
      {error && <p>Sorry, Error!</p>}
      {articles.length > 0 && (
        <ul>
          {articles.map(({ objectID, url, title}) => (
            <li key={objectID}>
              <a href={url} target='_blank'>{title}</a>
            </li>
          ))}
        </ul>
      )}
    </div>

    <h1>Котик дня</h1>
    {catUrl ? <img src={catUrl} alt='random cat' style={{width: "500px"}}/> : <p>Завантаження...</p>}

    <FeedbackForm />

    <div>
      <label>
        <input type="checkbox" name="terms" checked={hasAccepted} onChange={handleAcceptChange}/> 
				I accept terms and conditions
      </label>
      <button type="button" disabled={!hasAccepted}>Proceed</button>
    </div>
    <hr />

    <h1>Select coffee size</h1>
    <label>
        <input type="radio" name="coffeeSize" value="sm" checked={coffeeSize == "sm"} onChange={handleSizeChange}/>
        Small
    </label>
    <label>
        <input type="radio" name="coffeeSize" value="md" checked={coffeeSize == "md"} onChange={handleSizeChange}/>
        Meduim
    </label>
    <label>
        <input type="radio" name="coffeeSize" value="lg" checked={coffeeSize == "lg"} onChange={handleSizeChange}/>
        Large
    </label>
    <hr />

    <LangSwitcher value={lang} onSelect={setLang}/>
    <hr />

    <SearchBar />
    <hr />

    <div>
      <h1>Login to your account</h1>
      {/* <LoginForm onLogin={handleLogin}/> */}
      <LoginForm />
    </div>
    
    <button onClick={() => setShowTimer((prev) => !prev)}>
      {showTimer ? "Приховати таймер" : "Показати таймер"}
    </button>

    {/* {showTimer && <Timer />} */}

    <ButtonEffect />

    <Fruits />
   
    <Button value={clicks} onUpdate={handleClick}/>
    <Button value={clicks} onUpdate={handleClick}/>
    {/* <CustomButton message="Lalalalalala"> Play music</CustomButton>
    <CustomButton message="Uploading your data..."> Upload data</CustomButton> */}

    <h1>Products</h1>
    <Product 
      name="Cookies"
      imgURL="https://www.verybestbaking.com/sites/g/files/jgfbjl326/files/srh_recipes/4bc5edb86285aadc28069f51d9e98974.jpg"
      price={50}/>
    <Product 
      name="Pizza"
      imgURL="https://www.allrecipes.com/thmb/aefJMDXKqs42oAP71dQuYf_-Qdc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/6776_Pizza-Dough_ddmfs_4x3_1724-fd91f26e0bd6400a9e89c6866336532b.jpg"
      price={100}/>
    <Product 
      name="Ice Cream"
      imgURL="https://becs-table.com.au/wp-content/uploads/2014/01/ice-cream-1.jpg"
      price={10}/>
    <Product 
      name="Pasta"
      price={150}/>
    <Product />
    
    <Gallery 
      name="Марія Склодовська-Кюрі (Maria Skłodowska-Curie)"
      imgId='szV5sdG'
      profession="фізик та хімік"
      countAward={4}
      awards="(Нобелівська премія з фізики, Нобелівська премія з хімії, Медаль Дейві, Медаль Маттеуччі)"
      discovery="полоній (хімічний елемент)" />
     <Gallery 
      name="Кацуко Сарухаші (Katsuko Saruhashi)"
      imgId='YfeOqp2'
      profession="геохімік"
      countAward={2}
      awards="(Премія Міяке з геохімії, Премія Танака)"
      discovery="метод вимірювання вмісту діоксиду карбону в морській воді" />
      
      <MailBox 
      username="Hanna"
      messages={['Hello', 'Bye', 'How are you?']}
      />
      <MailBox 
      username="Hanna"
      messages={[]}
      />

    <section>
      <h1>Список речей для пакування Саллі Райд(Sally Ride)</h1>
      <ul>
        <Item 
          isPacked={false} 
          name="Космічний костюм" 
        />
        <Item 
          isPacked={true} 
          name="Шолом із золотим листям" 
        />
        <Item 
          isPacked={false} 
          name="Фото Тем О'Шонессі(Tam O'Shaughnessy)" 
        />
      </ul>
    </section>

    {/* <List /> */}

    <Alert
       variant="warning"
       text="Please update your email!"
    />
    <Alert 
       variant="error"
       text="There was an error during transaction!"
    />
    <Alert 
       variant="success"
       text="Payment received, thank you for your purchase!"
       elevated={true}
    />
    <Alert 
       variant="info"
       text=" Would you like to browse our recommended products?"
       outlined
    />
    <Alert 
       variant="info"
       text=" Would you like to browse our recommended products?"
       outlined
       elevated
    />

    <IoBookOutline className='icon-book' size={36}/>

    {/* <Card 
    text="Hello!"/> */}

    <Card>
    Hello!
    <h1>Title</h1>
    <ul>
      <li>First</li>
      <li>Second</li>
    </ul>
    </Card>


    </>
  )
}


