import React from 'react';
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
import { useState } from 'react'
import  ButtonEffect from './ButtonEffect'
import  Timer from './Timer'
import  LoginForm from './LoginForm'
import  SearchBar from './SearchBar'

export default function App() {
  const [ clicks, setClicks ] = useState(0);
    
  const handleClick = () => {
    setClicks(clicks + 1)
  }
  const [showTimer, setShowTimer] = useState(true)

  const handleLogin = (userData) => {
    console.log(userData)
  }

  return (
    <>
    <SearchBar />
    
    <div>
      <h1>Login to your account</h1>
      <LoginForm onLogin={handleLogin}/>
    </div>
    
    <button onClick={() => setShowTimer((prev) => !prev)}>
      {showTimer ? "Приховати таймер" : "Показати таймер"}
    </button>

    {showTimer && <Timer />}

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

    <List />

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


