const CardHistory = (props) => {
    return (
      <CardHistoryStyle>
        <Typography sx={{ color: "#E86E5A" }}>{restaurantName}</Typography>
        <P>{date}</P>
        <Subtotal>
          <strong>SUBTOTAL</strong>
          {totalPriceBRL}
        </Subtotal>
      </CardHistoryStyle>
    );
  };
  export default CardHistory;