import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardBigRestaurant from "../../components/CardBigRestaurant/CardBigRestaurant";
import CardResultRestaurant from "../../components/CardResultRestaurant/CardResult Restaurant";
import Header from "../../components/Header/Header";
import GlobalStateContext from "../../context/GlobalStateContext";
import { ScreenContainer } from "../Restaurant/styled";
import { ContainerCardDetail } from "./styled";

const DetailRestaurant = () => {
    const { states, requests } = useContext(GlobalStateContext)

    const params = useParams();

    useEffect(() => {
        requests.getRestaurantDetail(params.id);
    }, []);

    //RETORNANDO O CARD DO INÍCIO NA PAGE DETAIL 
    const mapDetailRestaurant = states.cardapio?.map((product) => {
        return (
            // <CardBigRestaurant
            //     key={rest.id}
            //     photoUrl={rest.photoUrl}
            //     name={rest.name}
            //     description={rest.description}
            //     price={rest.price}
            // />

            <CardBigRestaurant product={product} key={product.id} restaurant={states.restaurantDetail}></CardBigRestaurant>

        )
    })

    return (
        <ScreenContainer>
            <Header back={true} />
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