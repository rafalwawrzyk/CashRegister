
const INITIAL_STATE = {
    sections:[
        {
            title:'torell',
            imageUrl:'https://i.ibb.co/Khxd7RV/torell-main.jpg',
            id:1,
            linkUrl:'sklep/torell'
          },
          {
            title:'innova',
            imageUrl:'https://i.ibb.co/NnWH87v/innova-main.png',
            id:2,
            linkUrl:'sklep/innova'
          },
          {
            title:'posnet',
            imageUrl:'https://i.ibb.co/ZSxMZkv/posnet-main-2.jpg',
            id:3,
            linkUrl:'sklep/posnet'
          },
          {
            title:'emar',
            imageUrl:'https://i.ibb.co/J5XYTG5/emar-main.png',
            id:4,
            linkUrl:'sklep/emar'
          },
          {
            title:'aclas',
            imageUrl:'https://i.ibb.co/10cFgtg/aclas-main.png',
            id:5,
            linkUrl:'sklep/aclas'
          }
    ]
};


const directoryReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state
    }
}

export default directoryReducer