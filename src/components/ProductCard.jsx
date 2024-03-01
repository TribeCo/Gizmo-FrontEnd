"use client";

import { Colors } from "@/utils";
import {
	Button,
	Box,
	Card,
	CardActionArea,
	CardMedia,
	Typography,
	CardContent,
	IconButton,
} from "@mui/material";
import { useState } from "react";

import { convert } from "@/utils";

const handleAddToCart = () => {
	//TODO
	console.log("Go to cart");
};
const handleGoToProduct = () => {
	//TODO
	console.log("Go to Product page");
};

const ProductCard = ({ product }) => {
	const [show, setShow] = useState(false);
	return (
		<CardActionArea
			disableRipple
			sx={{
				mx: 1,
				borderRadius: "40px",
			}}
			onMouseOver={() => setShow(true)}
			onMouseLeave={() => setShow(false)}>
			{!show ? first() : second()}
		</CardActionArea>
	);

	function second() {
		return (
			<Card
				sx={{
					width: 242,
					height: 381,
					borderRadius: "40px",
					background: "linear-gradient(to bottom, #FFFFFF 45%, #DEF0F5 75%)",
					border: "5px solid #5A8EAA",
				}}>
				<IconButton
					disableRipple
					onClick={handleGoToProduct}
					sx={{
						display: "flex",
						flexDirection: "column",
						pt: 0,
					}}>
					<CardMedia
						sx={{
							mx: "auto",
							mt: 0.8,
							height: 218,
							width: 218,
							objectFit: "cover",
							borderRadius: "30px",
						}}
						image={product.image2}
						alt={product.name}>
						<Box
							mt={1.5}
							ml={2.5}
							position="absolute"
							bgcolor={product.badge === "جدید" ? "#5B9A8B" : "#BB0000"}
							borderRadius="20px"
							px={1}
							color="#fff">
							<Typography
								align="center"
								fontSize="16px"
								fontWeight="900"
								lineHeight="30px">
								{product.badge}
							</Typography>
						</Box>
					</CardMedia>
					<Typography
						width="180px"
						align="center"
						fontSize="16px"
						fontWeight="900"
						lineHeight="20px"
						sx={{
							display: "flex",
							mx: "auto",
							mt: 1,
						}}>
						{product.name}
					</Typography>
					<Typography
						align="center"
						fontSize="16px"
						fontWeight="400"
						lineHeight="20px"
						mt="10px">
						{convert(((100 - product.discount) / 100) * product.price) +
							" تومان"}
					</Typography>
				</IconButton>
				<Button
					onClick={handleAddToCart}
					fullWidth
					variant="contained"
					sx={{
						mt: "10px",
						maxWidth: 200,
						mx: "auto",
						bgcolor: Colors.orange,
						color: "#000",
						height: "40px",
						borderRadius: "40px",
						opacity: "70%",
						display: "block",
						"&:hover": {
							bgcolor: Colors.orange,
							opacity: "100%",
						},
					}}>
					<Typography
						fontWeight="900"
						fontSize="15px"
						sx={{ opacity: "100%" }}>
						{"افزودن به سبد خرید"}
					</Typography>
				</Button>
			</Card>
		);
	}

	function first() {
		return (
			<Card
				sx={{
					width: 242,
					height: 381,
					borderRadius: "40px",
					background:
						"linear-gradient(104.6deg, rgba(255, 255, 255, 0.22) 1.9%, rgba(255, 255, 255, 0.12) 96.76%)",
					boxShadow: "0px 4px 40px rgba(0, 0, 0, 0.1)",
				}}>
				<CardMedia
					sx={{
						height: 242,
						width: 242,
						objectFit: "cover",

						filter: "grayscale(100%)",
						WebkitFilter: "grayscale(100%)",
					}}
					image={product.image1}
					alt={product.name}>
					<Box
						mt={1.5}
						ml={2.5}
						position="absolute"
						bgcolor={product.badge === "جدید" ? "#5B9A8B" : "#BB0000"}
						borderRadius="20px"
						px={1}
						color="#fff">
						<Typography
							align="center"
							fontSize="16px"
							fontWeight="900"
							lineHeight="30px">
							{product.badge ? product.badge : convert(product.discount) + " %"}
						</Typography>
					</Box>
				</CardMedia>
				<CardContent>
					<Typography
						width={224}
						align="center"
						fontSize="20px"
						fontWeight="900"
						lineHeight="25px"
						sx={{ display: "flex", mx: "auto" }}>
						{product.name}
					</Typography>
					{product.discount > 0 ? (
						<>
							<Box>
								{product.badge === "تخفیف ویژه" && (
									<Box
										mt={0.1}
										ml={21}
										position="absolute"
										bgcolor="#BB0000"
										borderRadius="20px"
										px={1}
										py="4px"
										color="#fff">
										<Typography
											noWrap
											align="center"
											fontSize="14px"
											fontWeight="400"
											lineHeight="14px">
											{convert(product.discount) + " %"}
										</Typography>
									</Box>
								)}
								<Box
									mt={1.3}
									ml={6}
									position="absolute"
									bgcolor="#BB0000"
									borderRadius="20px"
									px={7}
									pt="2.5px"
									color="#fff"></Box>
								<Typography
									mt="5px"
									align="center"
									fontSize="20px"
									fontWeight="400"
									lineHeight="25px"
									sx={{ color: "#BFBFBF" }}>
									{convert(product.price) + " تومان"}
								</Typography>
							</Box>
							<Typography
								mt="5px"
								align="center"
								fontSize="20px"
								fontWeight="400"
								lineHeight="25px">
								{convert(((100 - product.discount) / 100) * product.price) +
									" تومان"}
							</Typography>
						</>
					) : (
						<Typography
							align="center"
							mt="25px"
							fontSize="20px"
							fontWeight="400"
							lineHeight="25px">
							{convert(product.price) + " تومان"}
						</Typography>
					)}
				</CardContent>
			</Card>
		);
	}
};

export default ProductCard;
