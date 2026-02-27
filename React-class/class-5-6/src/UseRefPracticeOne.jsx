import { useRef } from 'react';

export default function CatFriends() {
  const itemRef = useRef(null);

  function handleScrollToFirstCat( element ) {
    console.log(element , "element ref")
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

//   function handleScrollToSecondCat() {
//     secondCatRef.current.scrollIntoView({
//       behavior: 'smooth',
//       block: 'nearest',
//       inline: 'center'
//     });
//   }

//   function handleScrollToThirdCat() {
//     thirdCatRef.current.scrollIntoView({
//       behavior: 'smooth',
//       block: 'nearest',
//       inline: 'center'
//     });
//   }

  function getMap(){
    if(!itemRef.current){
        itemRef.current = new Map();
    }
    return itemRef.current;
  }

  console.log(itemRef.current)

  return (
    <>
      <nav>
        <button onClick={() => handleScrollToFirstCat(getMap().get(0))}>
          Neo
        </button>
        <button onClick={() => handleScrollToFirstCat(getMap().get(5))}>
          Millie
        </button>
        <button onClick={() => handleScrollToFirstCat(getMap().get(8))}>
          Bella
        </button>
      </nav>
      <div>
        <ul style={{ display: 'flex', overflowX: 'auto', listStyle: 'none', padding: '20px' , gap: "20px" , width: "40%" }}>
          {
            setupCatList().map((cat)=>{
                return(
                  <li key={cat.id}
                    ref={(element)=>{
                        const map = getMap();
                        map.set(cat.id, element);
                    }}
                  >
                    <img src={cat.imageUrl} alt={`Cat ${cat.id}`} />
                  </li>
                )
            })
          }
        </ul>
      </div>
    </>
  );
}

function setupCatList() {
  const catCount = 10;
  const catList = new Array(catCount)
  for (let i = 0; i < catCount; i++) {
    let imageUrl = '';
    if (i < 5) {
      imageUrl = "https://placecats.com/neo/320/240";
    } else if (i < 8) {
      imageUrl = "https://placecats.com/millie/320/240";
    } else {
      imageUrl = "https://placecats.com/bella/320/240";
    }
    catList[i] = {
      id: i,
      imageUrl,
    };
  }
  return catList;
}