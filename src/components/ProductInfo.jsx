import {
	Box,
	Button,
	CardMedia,
	Grid,
	IconButton,
	Rating,
	Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

import MorePhoto from "./product/MorePhoto";
import SelectProduct from "./product/SelectProduct";
import { convert } from "@/utils";

function ProductInfo({ data }) {
	return (
		<Grid container>
			<Grid
				item
				mt={3}
				sm={12}
				md={6}>
				<Box>
					<Box
						position="absolute"
						display="flex"
						sx={{
							flexDirection: {
								md: "row-reverse",
								sm: "column",
								xs: "column",
							},
						}}>
						<Box>
							<CardMedia
								image={data.special_image}
								sx={{
									m: {
										xs: "0 1.3rem 0 1.3rem",
										sm: 3,
										md: "8rem 0 0 0",
										lg: "8rem 0 0 4rem",
									},
									mt: { xs: 5, sm: 0 },
									height: {
										xs: 380,
										sm: 380,
										md: 350,
										lg: 400,
										xl: 450,
									},
									width: {
										xs: 380,
										sm: 380,
										md: 350,
										lg: 400,
										xl: 450,
									},
								}}
							/>
						</Box>
						<Box
							ml="2rem"
							display="flex"
							flexDirection="column"
							justifyContent="center">
							<Typography
								variant="h5"
								fontWeight={800}
								noWrap
								sx={{
									color: { xs: "#000000", sm: "#ffffff" },
									fontSize: { xs: 25, sm: 30 },
									mt: { xs: 0, sm: 4 },
								}}>
								{"تصاویر محصول"}
							</Typography>
							<Box
								sx={{
									display: "flex",
									flexDirection: {
										md: "column",
										sm: "row",
										xs: "row",
									},
								}}>
								<IconButton
									disableRipple
									sx={{
										mt: 1,
									}}>
									<CardMedia
										image={data.image1}
										sx={{
											border: "0.2em solid #22668D",
											borderRadius: 3,
											height: {
												xs: 100,
												sm: 100,
												md: 120,
												lg: 135,
												xl: 135,
											},
											width: {
												xs: 100,
												sm: 100,
												md: 120,
												lg: 135,
												xl: 135,
											},
										}}
									/>
								</IconButton>
								<IconButton
									disableRipple
									sx={{
										mt: 1,
									}}>
									<CardMedia
										image={data.image2}
										sx={{
											border: "0.2em solid #22668D",
											borderRadius: 3,
											height: {
												xs: 100,
												sm: 100,
												md: 120,
												lg: 135,
												xl: 135,
											},
											width: {
												xs: 100,
												sm: 100,
												md: 120,
												lg: 135,
												xl: 135,
											},
										}}
									/>
								</IconButton>
								<MorePhoto
									title={data.name}
									image={data.special_image}
									imageList={data.images}
								/>
							</Box>
						</Box>
					</Box>
					<Box
						borderRadius="0 4em 18em 0"
						bgcolor="#90B2C5"
						sx={{
							height: { xs: 400, sm: 570 },
							mb: { xs: 20, sm: 0 },
							width: { xs: 370, sm: 600, md: 500, lg: 600, xl: 675 },
						}}
					/>
				</Box>
			</Grid>
			<Grid
				item
				pl={2}
				mt={6}
				sm={12}
				md={5}
				maxWidth="400px">
				<Box>
					<Box display="flex">
						<Typography
							variant="h5"
							fontWeight={900}>
							{data.name}
						</Typography>
						<Box
							display={data.discount > 0 ? "" : "none"}
							ml={1.5}
							bgcolor={"#BB0000"}
							borderRadius={10}
							maxHeight={40}
							color="#fff">
							<Typography
								noWrap
								align="center"
								pt={0.6}
								variant="body1"
								px={2}
								fontWeight={900}>
								{convert(data.discount) + " %"}
							</Typography>
						</Box>
					</Box>
					<Box
						display="flex"
						sx={{
							flexDirection: { xs: "column", md: "row" },
							gap: 2,
						}}
						mt={2}
						ml={2}>
						<Box display="flex">
							<svg
								width="18"
								height="18"
								viewBox="0 0 18 18"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M1.5 7.52818L2.1225 7.47485C2.10815 7.31478 2.0327 7.16639 1.9118 7.06049C1.79091 6.9546 1.63387 6.89935 1.4733 6.90621C1.31273 6.91308 1.16098 6.98153 1.04957 7.09736C0.938149 7.21318 0.875632 7.36747 0.875 7.52818H1.5ZM15.8633 9.04735L15.275 12.4473L16.5075 12.6607L17.095 9.26068L15.8633 9.04735ZM10.0375 16.7082H6.16333V17.9582H10.0375V16.7082ZM5.40417 16.0107L4.7275 8.18318L3.48167 8.29068L4.15917 16.1182L5.40417 16.0107ZM15.275 12.4473C14.8525 14.889 12.6508 16.7082 10.0375 16.7082V17.9582C13.2258 17.9582 15.9758 15.734 16.5075 12.6607L15.275 12.4473ZM10.0458 3.24985L9.49333 6.62068L10.7267 6.82235L11.2792 3.45235L10.0458 3.24985ZM4.99 7.53818L6.18917 6.50485L5.3725 5.55818L4.175 6.59152L4.99 7.53818ZM8.37 3.14318L8.76667 1.61485L7.55667 1.30152L7.16 2.82902L8.37 3.14318ZM9.365 1.31485L9.48583 1.35402L9.86833 0.164017L9.7475 0.124851L9.365 1.31485ZM7.76917 4.67985C8.02948 4.19318 8.23116 3.67735 8.37 3.14318L7.16 2.82902C7.04607 3.26788 6.88047 3.69168 6.66667 4.09152L7.76917 4.67985ZM9.48583 1.35402C9.60474 1.39005 9.71261 1.45554 9.79944 1.54441C9.88626 1.63328 9.94923 1.74264 9.9825 1.86235L11.1925 1.54902C11.1064 1.22527 10.9398 0.928543 10.7083 0.686403C10.4768 0.444264 10.1879 0.264569 9.86833 0.164017L9.48583 1.35402ZM8.76667 1.61485C8.78328 1.55483 8.81275 1.49914 8.85304 1.45165C8.89334 1.40416 8.94348 1.36601 9 1.33985L8.4575 0.214017C8.01417 0.427351 7.68083 0.822351 7.55667 1.30152L8.76667 1.61485ZM9 1.33985C9.11405 1.28538 9.24458 1.27644 9.365 1.31485L9.7475 0.124851C9.32193 -0.0115497 8.86026 0.0203614 8.4575 0.214017L9 1.33985ZM10.795 8.15318H15.1117V6.90318H10.795V8.15318ZM2.9325 16.8382L2.1225 7.47485L0.8775 7.58235L1.68583 16.9457L2.9325 16.8382ZM2.125 16.9273V7.52818H0.875V16.9273H2.125ZM1.68583 16.9457C1.68329 16.9154 1.68791 16.8849 1.69778 16.8562C1.70765 16.8274 1.72339 16.8011 1.744 16.7787C1.76461 16.7564 1.78964 16.7386 1.8175 16.7264C1.84536 16.7143 1.87544 16.7081 1.90583 16.7082V17.9582C2.51083 17.9582 2.98417 17.4398 2.9325 16.8382L1.68583 16.9457ZM11.2792 3.45235C11.3831 2.81879 11.3536 2.17051 11.1925 1.54902L9.9825 1.86318C10.0999 2.31595 10.1215 2.78826 10.0458 3.24985L11.2792 3.45235ZM6.16333 16.7082C5.97251 16.7079 5.78873 16.6361 5.64821 16.507C5.50769 16.3779 5.42062 16.2008 5.40417 16.0107L4.15917 16.1182C4.20253 16.62 4.4324 17.0873 4.80342 17.4279C5.17444 17.7686 5.65966 17.9578 6.16333 17.9582V16.7082ZM6.18917 6.50485C6.75583 6.01652 7.36583 5.43568 7.77 4.67985L6.66667 4.09152C6.37833 4.63235 5.91917 5.08818 5.3725 5.55818L6.18917 6.50485ZM17.095 9.26068C17.1452 8.97151 17.1315 8.67486 17.055 8.39151C16.9784 8.10817 16.8409 7.84499 16.6519 7.6204C16.463 7.39581 16.2272 7.21524 15.9612 7.09135C15.6951 6.96746 15.4052 6.90324 15.1117 6.90318V8.15318C15.5842 8.15318 15.945 8.57985 15.8633 9.04735L17.095 9.26068ZM1.90583 16.7082C2.0275 16.7082 2.125 16.8065 2.125 16.9273H0.875C0.875 17.4957 1.33583 17.9582 1.90583 17.9582V16.7082ZM9.49333 6.62068C9.46227 6.8095 9.47265 7.00281 9.52376 7.18722C9.57488 7.37162 9.6655 7.54269 9.78933 7.68857C9.91317 7.83445 10.0673 7.95164 10.2409 8.03201C10.4146 8.11239 10.6036 8.15318 10.795 8.15318V6.90318C10.7848 6.90323 10.7748 6.90187 10.7656 6.89758C10.7563 6.8933 10.7482 6.88704 10.7416 6.87924C10.7351 6.87144 10.7304 6.8623 10.7278 6.85247C10.7252 6.84263 10.7248 6.83235 10.7267 6.82235L9.49333 6.62068ZM4.7275 8.18318C4.7172 8.0625 4.73487 7.9411 4.78065 7.82897C4.82643 7.71683 4.89818 7.61717 4.99 7.53818L4.17333 6.59068C3.93168 6.79904 3.74296 7.06181 3.62271 7.35736C3.50247 7.65292 3.45412 7.9728 3.48167 8.29068L4.7275 8.18318Z"
									fill="#4ECB71"
								/>
							</svg>
							<Typography
								ml={1}
								mr={3}
								color="#747678"
								fontSize={14}
								fontWeight={400}>
								{`${convert(
									data.comment_count,
								)} % از خریداران، این کالا را پیشنهاد کردند. `}
							</Typography>
						</Box>
						<Box display="flex">
							<Rating
								readOnly
								value={data.rating}
								precision={1}
								icon={
									<svg
										style={{ marginRight: 1, marginLeft: 1 }}
										width="18"
										height="18"
										viewBox="0 0 18 18"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M4.52993 5.829C2.68493 6.24675 1.76243 6.45525 1.54268 7.161C1.32368 7.866 1.95218 8.60175 3.20993 10.0725L3.53543 10.4528C3.89243 10.8705 4.07168 11.0797 4.15193 11.3377C4.23218 11.5965 4.20518 11.8755 4.15118 12.4327L4.10168 12.9405C3.91193 14.9032 3.81668 15.8843 4.39118 16.32C4.96568 16.7565 5.82968 16.3582 7.55618 15.5632L8.00393 15.3577C8.49443 15.1312 8.73968 15.0187 8.99993 15.0187C9.26018 15.0187 9.50543 15.1312 9.99668 15.3577L10.4429 15.5632C12.1702 16.3582 13.0342 16.7557 13.6079 16.3207C14.1832 15.8842 14.0879 14.9032 13.8982 12.9405M14.7899 10.0725C16.0477 8.6025 16.6762 7.86675 16.4572 7.161C16.2374 6.45525 15.3149 6.246 13.4699 5.829L12.9929 5.721C12.4687 5.6025 12.2069 5.54325 11.9962 5.3835C11.7862 5.22375 11.6512 4.9815 11.3812 4.497L11.1352 4.056C10.1849 2.352 9.71018 1.5 8.99993 1.5C8.28968 1.5 7.81493 2.352 6.86468 4.056"
											stroke="#FFCC70"
											fill="#FFCC70"
											stroke-width="1.5"
											stroke-linecap="round"
										/>
									</svg>
								}
								emptyIcon={
									<svg
										style={{ marginRight: 1, marginLeft: 1 }}
										width="18"
										height="18"
										viewBox="0 0 18 18"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M4.52993 5.829C2.68493 6.24675 1.76243 6.45525 1.54268 7.161C1.32368 7.866 1.95218 8.60175 3.20993 10.0725L3.53543 10.4528C3.89243 10.8705 4.07168 11.0797 4.15193 11.3377C4.23218 11.5965 4.20518 11.8755 4.15118 12.4327L4.10168 12.9405C3.91193 14.9032 3.81668 15.8843 4.39118 16.32C4.96568 16.7565 5.82968 16.3582 7.55618 15.5632L8.00393 15.3577C8.49443 15.1312 8.73968 15.0187 8.99993 15.0187C9.26018 15.0187 9.50543 15.1312 9.99668 15.3577L10.4429 15.5632C12.1702 16.3582 13.0342 16.7557 13.6079 16.3207C14.1832 15.8842 14.0879 14.9032 13.8982 12.9405M14.7899 10.0725C16.0477 8.6025 16.6762 7.86675 16.4572 7.161C16.2374 6.45525 15.3149 6.246 13.4699 5.829L12.9929 5.721C12.4687 5.6025 12.2069 5.54325 11.9962 5.3835C11.7862 5.22375 11.6512 4.9815 11.3812 4.497L11.1352 4.056C10.1849 2.352 9.71018 1.5 8.99993 1.5C8.28968 1.5 7.81493 2.352 6.86468 4.056"
											stroke="#213346"
											stroke-width="1.5"
											stroke-linecap="round"
										/>
									</svg>
								}
							/>
							<Typography
								noWrap
								ml={2}
								fontSize={12}
								fontWeight={400}
								color="#747678">{`(${convert(
								data.comment_count,
							)} نظر)`}</Typography>
						</Box>
					</Box>
					<Box
						display="flex"
						alignItems="center"
						mt={2}
						ml={2}>
						<Typography
							ml={1}
							color="#252B48"
							fontSize={14}
							fontWeight={400}>
							{`دسته بندی:`}
						</Typography>
						{data.category.map((c) => {
							return (
								<Link
									style={{ textDecoration: "none" }}
									href={`/categories/${c.slug}`}>
									<Button sx={{ height: 20 }}>
										<Typography
											fontSize={14}
											fontWeight={400}>
											{c.name}
										</Typography>
									</Button>
								</Link>
							);
						})}
					</Box>
					<Box
						display="flex"
						alignItems="center"
						mt={2}
						ml={2}>
						<Typography
							ml={1}
							mr={1}
							color="#252B48"
							fontSize={14}
							fontWeight={400}>
							{`برند:`}
						</Typography>
						<Link href={data.brand.website}>
							<Image
								src={data.brand.logo}
								alt={data.brand.name}
								height={50}
								width={50}
								style={{
									borderRadius: 10,
								}}
							/>
						</Link>
					</Box>
					<Typography
						color="#22668D"
						mt={2}
						ml={3}
						fontWeight={900}
						fontSize={20}>
						{"ویژگی ها: "}
					</Typography>
					<Box
						mt={2}
						ml={5}>
						{data.attributes
							.filter((atr) => {
								return atr.is_main;
							})
							.map((atr) => {
								return (
									<Typography color="#22668D">{`•   ${atr.key} : ${atr.value}`}</Typography>
								);
							})}
					</Box>
				</Box>
				<SelectProduct data={data} />
			</Grid>
		</Grid>
	);
}

export default ProductInfo;
