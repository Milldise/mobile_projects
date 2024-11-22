import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import './index.css'
import Items from './Components/Items'
import Categories from './Components/Categories'

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      currentItems: [],
      orders: [],
      items: [
          {
            id: 1,
            title: "Acer Nitro 5",
            image: "./img/acernitrog.png",
            desc: "----------",
            category: "Gaming Laptop",
            price: "600.58"
          },

          {
            id: 2,
            title: "Ardor Gaming",
            image: "../img/ardorg.png",
            desc: "----------",
            category: "Gaming Laptop",
            price: "1000.00"
          },

          {
            id: 3,
            title: "Asus Tuf Gaming",
            image: "./img/asusg.png",
            desc: "----------",
            category: "Gaming Laptop",
            price: "1000.99"
          },

          {
            id: 4,
            title: "Lenovo IdeaPad",
            image: "./img/lenovoideapad.png",
            desc: "----------",
            category: "Gaming Laptop",
            price: "709.99"
          },

          {
            id: 5,
            title: "Lenovo Legion",
            image: "./img/lenovoleg.png",
            desc: "----------",
            category: "Gaming Laptop",
            price: "1999.99"
          },

          {
            id: 6,
            title: "Machenike",
            image: "./img/machenikeg.png",
            desc: "----------",
            category: "Gaming Laptop",
            price: "1993.99"
          },

          {
            id: 7,
            title: "MSI",
            image: "./img/msi.png",
            desc: "----------",
            category: "Gaming Laptop",
            price: "609.69"
          },

          {
            id: 8,
            title: "Lenovo ThinkPad",
            image: "./img/lol.webp",
            desc: "----------",
            category: "Gaming Laptop",
            price: "555.65"
          },

          {
            id: 9,
            title: "Acer Nitro",
            image: "../img/acerg.png",
            desc: "----------",
            category: "Gaming Laptop",
            price: "599.99"
          },

          {
            id: 10,
            title: "Acer Swift",
            image: "../img/acerswift.png",
            desc: "----------",
            category: "Ultrabook",
            price: "599.99"
          },

          {
            id: 11,
            title: "Asus VivoBook",
            image: "../img/asusvb.png",
            desc: "----------",
            category: "Ultrabook",
            price: "599.99"
          },

          {
            id: 12,
            title: "DEX Aquilon",
            image: "../img/dexpaquilon.png",
            desc: "----------",
            category: "Office",
            price: "599.99"
          },

          {
            id: 13,
            title: "Honor Magic",
            image: "../img/honowmagic.png",
            desc: "----------",
            category: "Ultrabook",
            price: "599.99"
          },

          {
            id: 14,
            title: "HP 240",
            image: "../img/Hp240.png",
            desc: "----------",
            category: "Office",
            price: "599.99"
          },

          {
            id: 15,
            title: "Huawei MateBook",
            image: "../img/huaweimatebookd16.png",
            desc: "----------",
            category: "Office",
            price: "599.99"
          },

          {
            id: 16,
            title: "MacBook Pro",
            image: "../img/macbookair.png",
            desc: "----------",
            category: "MacBook",
            price: "599.99"
          },

          {
            id: 17,
            title: "MacBook Air",
            image: "../img/macbookairr.png",
            desc: "----------",
            category: "MacBook",
            price: "599.99"
          },

          {
            id: 18,
            title: "Lenovo V15",
            image: "../img/lenovov15.png",
            desc: "----------",
            category: "Office",
            price: "599.99"
          },

          /*{
            id: 19,
            title: "Acer Nitro",
            image: "../img/acerg.png",
            desc: "----------",
            category: "Gaming Laptop",
            price: "599.99"
          },

          {
            id: 20,
            title: "Acer Nitro",
            image: "../img/acerg.png",
            desc: "----------",
            category: "Gaming Laptop",
            price: "599.99"
          },*/

      ]
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
  }
  render(props) {
    return (
    <div className='wrapper'>
    <Header orders = {this.state.orders} onDelete = {this.deleteOrder} onCount = {this.incrementCount}/> 
    <Categories chooseCategory = {this.chooseCategory}/>
    <Items items = {this.state.currentItems} onAdd = {this.addToOrder} />

    <Footer />
    </div>
    )

  }
  chooseCategory(category) {
    if (category ==='all') {
      this.setState({currentItems:this.state.items})
      return
    }
    this.setState({currentItems:this.state.items.filter(el => el.category === category)})
  }

  deleteOrder(id) {
      this.setState({orders: this.state.orders.filter(el =>
      el.id !== id
      )})
  }
  addToOrder(item){ 
    let arrayId = false 
    this.state.orders.map(el => {
      if(el.id === item.id) {
        arrayId = True 
      }
    })
    if (!arrayId) {
    this.setState({orders: [...this.state.orders, item]})
    
    }
  
  }

  componentDidMount() {
    const orders = JSON.parse(localStorage.getItem('orders'));
    if (orders) {
      this.setState({ orders });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.orders !== this.state.orders) {
      localStorage.setItem('orders', JSON.stringify(this.state.orders));
    }
  }

  
}
export default App


