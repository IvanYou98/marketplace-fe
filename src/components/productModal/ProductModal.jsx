import * as React from "react";
import ImageSlider from "./imageSlider";
import { sliderData } from "./sliderData";
import './ProductModal.css'

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4
};

export default function BasicModal({ open, handleModalClose }) {
    const navigate = useNavigate();
    //const [open, setOpen] = React.useState(false);
    const [isCheckOut, setIsCheckOut] = React.useState(false);
    const [isLike, setIsLike] = React.useState(false);
    //const handleOpen = () => setOpen(true);
    //const handleClose = () => setOpen(false);

    const addFav = () => {
        setIsLike(true);
    };
    const removeFav = () => {
        setIsLike(false);
    };
    const checkOut = () => {
        setIsCheckOut(true);
    };
    const details = () => {
        navigate("/product")
    };

    return (
        <div>
            <Modal
                open={open}
                onClose={() => handleModalClose()}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        <>
                            {/* <CustomImageList className="microPic" slides={sliderData} /> */}
                            {isCheckOut && (
                                <Alert
                                    onClose={() => {
                                        setIsCheckOut(false);
                                    }}
                                >
                                    Check Out Successfully!
                                </Alert>
                            )}
                            <ImageSlider slides={sliderData} />

                            <hr />
                            <p>this is discription</p>
                            <hr />
                            <Stack className="modal-stack" spacing={2} direction="row">
                                <Button variant="contained" onClick={details}>
                                    show details
                                </Button>
                                {isLike ? (
                                    <FavoriteIcon className="icons" onClick={removeFav} />
                                ) : (
                                    <FavoriteBorderIcon className="icons" onClick={addFav} />
                                )}
                                <ShoppingCartIcon className="icons" onClick={checkOut} />
                            </Stack>
                        </>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}
