import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardBigRestaurant from "../../components/CardBigRestaurant/CardBigRestaurant";
import CardResultRestaurant from "../../components/CardResultRestaurant/CardResult Restaurant";
import GlobalStateContext from "../../context/GlobalStateContext";
import { ScreenContainer } from "../Restaurant/styled";
import { ContainerCardDetail } from "./styled";

const DetailRestaurant = () => {
    const { states, setters, values, requests } = useContext(GlobalStateContext)

    const params = useParams();

    useEffect(() => {
        requests.getRestaurantDetail(params.id);
    }, []);

     //RETORNANDO O CARD DO INÍCIO NA PAGE DETAIL 
    const mapDetailRestaurant = states.cardapio?.map((rest) => {
        return (
            <CardBigRestaurant
                key={rest.id}
                photoUrl={rest.photoUrl}
                name={rest.name}
                description={rest.description}
                price={rest.price}
            />
        )
    })
    
    return (
        <ScreenContainer> 
            <ContainerCardDetail>
                <CardResultRestaurant
                    key={states.restaurantDetail.id}
                    logoUrl={states.restaurantDetail.logoUrl}
                    name={states.restaurantDetail.name}
                    category={states.restaurantDetail.category}
                    deliveryTime={states.restaurantDetail.deliveryTime}
                    shipping={states.restaurantDetail.shipping}
                    address={states.restaurantDetail.address}
            />
            </ContainerCardDetail>
            <div>{mapDetailRestaurant}</div>
        </ScreenContainer>
   )
}
export default DetailRestaurant;