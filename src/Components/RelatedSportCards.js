import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import CardLoading from "./CardLoading";

const RelatedSportCards = (props) => {
  const [idArr, setIdArr] = useState(null);
  const getSingleSportData = () => {
    fetch(`https://sports.api.decathlon.com/sports/${props.singleSportId}`)
      .then((response) => response.json())
      .then((response) => {
        relatedSportIDs(response.data);
      });
  };
  useEffect(() => {
    getSingleSportData();
  }, []);

  const relatedSportIDs = (jsonData) => {
    let idArr = [];
    const idList = jsonData.relationships.related;
    for (let i = 0; i < idList.length; i++) {
      idArr.push(idList[i].data.id);
    }
    getRelatedSportsData(idArr);
    return idArr;
  };

  async function getRelatedSportsData(listOfIDs) {
    let finalArr = [];
    for (let i = 0; i < listOfIDs.length; i++) {
      const response = await fetch(
        `https://sports.api.decathlon.com/sports/${listOfIDs[i]}`
      );
      const relatedSport = await response.json();
      finalArr.push(relatedSport.data);
    }
    return setIdArr(finalArr);
  }
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {idArr ? (
        idArr.map((id, idx) => {
          return (
            <div key={idx}>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={
                    id.relationships.images.data[0]
                      ? id.relationships.images.data[0].url
                      : "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
                  }
                  alt={id.attributes.name}
                />
                <Card.Body>
                  <Card.Title>{id.attributes.name}</Card.Title>
                </Card.Body>
              </Card>
            </div>
          );
        })
      ) : (
        <CardLoading />
      )}
    </div>
  );
};

export default RelatedSportCards;