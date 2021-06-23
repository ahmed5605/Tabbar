import React from 'react';
import { View, Button, StyleSheet ,SafeAreaView, TouchableOpacity, StatusBar } from 'react-native';
import { 
	createDrawerNavigator, 
	DrawerItem,
	DrawerContentScrollView
} from '@react-navigation/drawer';

import {
	Avatar,
	Title,
	Caption,
	Text,
	Drawer,
	Paragraph,
	TouchableRipple,
	Switch,
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



export function DrawerContent(props) {
	
	
	return (
		<View style={{flex: 1}} >
			<DrawerContentScrollView {...props} >
				<View style={styles.drawerContent} >
					<View style={styles.userInfoSection} >
						<View style={{flexDirection: 'row', marginTop: 15}} >
							<Avatar.Image
								source={require('../../assets/avatar.jpg')}
								size={50}
							/>
							<View style={{marginLeft: 15, flexDirection: 'column'}} >
								<Title style={styles.drawerContent}>Zaid Ahmed</Title>
								<Caption style={styles.drawerContent}>@Zaid_Ahmed</Caption>
							</View>
						</View>

						<View style={styles.row} >
							<View style={styles.section} >
								<Paragraph style={[styles.paragraph, styles.caption]} >80</Paragraph>
								<Caption style={styles.caption} >Following</Caption>
							</View>	
						

						
							<View style={styles.section} >
								<Paragraph style={[styles.paragraph, styles.caption]} >100</Paragraph>
								<Caption style={styles.caption} >Followers</Caption>
							</View>	
						</View>

					</View>	

					<Drawer.Section style={styles.bottomDrawerSection} >
						<DrawerItem
							icon={({color, size}) => (
								<Icon
									name="home-outline"
									color={color}
									size={size}
								/>
							)}
							label="Home"
							onPress={() => {props.navigation.navigate('Home')}}
						/>
						<DrawerItem
							icon={({color, size}) => (
								<Icon
									name="home"
									color={color}
									size={size}
								/>
							)}
							label="Profile"
							onPress={() => {props.navigation.navigate('Profile')}}
						/>
						{/* <DrawerItem
							icon={({color, size}) => (
								<Icon
									name="bookmark-outline"
									color={color}
									size={size}
								/>
							)}
							label="Bookmark"
							onPress={() => {props.navigation.navigate('Bookmark')}}
						/> */}
						<DrawerItem
							icon={({color, size}) => (
								<Icon
									name="home"
									color={color}
									size={size}
								/>
							)}
							label="Setting"
							onPress={() => {props.navigation.navigate('Setting')}}
						/>
						{/* <DrawerItem
							icon={({color, size}) => (
								<Icon
									name="account-check-outline"
									color={color}
									size={size}
								/>
							)}
							label="Support"
							onPress={() => {props.navigation.navigate('Support')}}
						/> */}

						{/* <DrawerItem
							icon={({color, size}) => (
								<Icon
									name="account-check-outline"
									color={color}
									size={size}
								/>
							)}
							label="Announcements"
							onPress={() => {props.navigation.navigate('Announcements')}}
						/> */}

						{/* <DrawerItem
							icon={({color, size}) => (
								<Icon
									name="account-check-outline"
									color={color}
									size={size}
								/>
							)}
							label="Students"
							onPress={() => {props.navigation.navigate('Students')}}
						/> */}
				</Drawer.Section>

				<Drawer.Section title="Preferences" >
					<TouchableRipple  >
							<View style={styles.preference} >
								<Text>Dark Theme</Text>
								<View>
									<Switch />
								</View>
							</View>
					</TouchableRipple>
				</Drawer.Section>	


				</View>	
			</DrawerContentScrollView>

			<Drawer.Section style={styles.bottomDrawerSection} >
				<DrawerItem
					icon={({color, size}) => (
						<Icon
							name="exit-to-app"
							color={color}
							size={size}
						/>
					)}
					label="Sign Out"
					
				/>
			</Drawer.Section>	
		</View>
	);
}


const styles= StyleSheet.create({
	drawerContent: {
		flex: 1,
	},
	userInfoSection: {
		paddingLeft: 20,
	},
	title: {
		marginTop: 3,
		fontWeight: 'bold',
		fontSize: 16
	},
	caption: {
		fontSize: 14,
		lineHeight: 14
	},
	row: {
		marginTop: 20,
		flexDirection : 'row',
		alignItems: 'center'
	},
	section: {
		flexDirection: 'row',
		alignItems: 'center',
		marginRight: 15
	},
	paragraph: {
		fontWeight: 'bold',
		marginRight: 3
	},
	drawerSection: {
		marginTop: 15
	},
	bottomDrawerSection: {
		marginBottom: 15,
		borderTopColor: '#f4f4f4',
		borderTopWidth: 1
	},
	preference: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingVertical: 12,
		paddingHorizontal: 16,
	},

});