import React, {useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button, Card, Divider} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Footer from './Footer';

function Content(): JSX.Element {
  const [reviews, setReviews] = useState([
    {
      name: 'Connie',
      review:
        'I was very impressed with the look and functionality of the 3 station unit we rented for our event.  It was very clean and pleasantly decorated.  The countertops and floors were very nice.  The driver that delive...',
      posted: 'about 1 year ago',
    },
    {
      name: 'Lindsay L',
      review:
        'I was very impressed with the look and functionality of the 3 station unit we rented for our event.  It was very clean and pleasantly decorated.  The countertops and floors were very nice.  The driver that delive...',
      posted: 'about 1 year ago',
    },
  ]);

  return (
      <View style={styles.container}>
        <ImageBackground
          resizeMode="cover"
          source={{
            uri: 'https://www.portablerestroomtrailers.com/static/frontend/Sjinnovation/PortableThemeMobile/en_US/images/home-page/home-banner.webp',
          }}>
          <View style={{marginTop: 10, marginBottom: 20, minHeight: 500}}>
            <Text style={[styles.overlayText, {fontSize: 25}]}>
              Up to 500 Large ADA Restrooms, Shower Trailers, and Laundry
            </Text>
            <Text style={[styles.overlayText, {fontSize: 20}]}>
              Largest In-Stock Inventory Nationwide
            </Text>
            <View style={{alignItems: 'center', marginTop: 20, gap: 10}}>
              <Button textColor="white" style={styles.overlayButton}>
                Purchase
              </Button>
              <Button textColor="white" style={styles.overlayButton}>
                Rent
              </Button>
              <Button textColor="white" style={styles.overlayButton}>
                Used
              </Button>
              <Button textColor="white" style={styles.overlayButton}>
                Platinum Membership Quantity Discounts
              </Button>
            </View>
            <View style={styles.overlaylogos}>
              <Image
                style={{width: 110, height: 110}}
                source={{
                  uri: 'https://www.portablerestroomtrailers.com/static/frontend/Sjinnovation/PortableThemeMobile/en_US/images/home-page/Inc_5000_Color_Medallion_Logo.png',
                }}
              />
              <Image
                style={{width: 130, height: 130}}
                source={{
                  uri: 'https://www.portablerestroomtrailers.com/static/frontend/Sjinnovation/PortableThemeMobile/en_US/images/home-page/Hot-Deals burgandy.png',
                }}
              />
            </View>
            <Text style={[styles.overlayTextdown, {fontSize: 20}]}>
              Immediate Delivery for Purchases and Rentals -
            </Text>
            <Text
              style={[
                styles.overlayTextdown,
                {fontSize: 20, color: '#7c0e2f'},
              ]}>
              Financing Available QBO{' '}
            </Text>
          </View>
        </ImageBackground>
        <View style={styles.blackbgView}>
          <Text style={styles.blackbgText}>BUY OR RENT ONLINE</Text>
          <Button textColor="white" style={styles.overlayButton}>
            Purchase Quote Calculator
          </Button>
          <Button textColor="white" style={styles.overlayButton}>
            Rental Quote Calculator
          </Button>
        </View>
        <View style={styles.typesView}>
          <Text style={styles.typesText}>
            Types of Portable Bathrooms & Showers
          </Text>
          <View style={styles.cardsView}>
            <View style={{width: '45%'}}>
              <Card>
                <Card.Content>
                  <Image
                    style={{width: '100%', height: 100}}
                    source={{
                      uri: 'https://www.portablerestroomtrailers.com/static/frontend/Sjinnovation/PortableThemeMobile/en_US/images/category/PRT-TrailerType-Icon-ADA.png',
                    }}
                  />
                </Card.Content>
              </Card>
              <Text style={styles.cardsText}>
                ADA Restroom Trailers
                <AntDesign size={15} name="right" />
              </Text>
            </View>
            <View style={{width: '45%'}}>
              <Card>
                <Card.Content>
                  <Image
                    style={{width: '100%', height: 100}}
                    source={{
                      uri: 'https://www.portablerestroomtrailers.com/static/frontend/Sjinnovation/PortableThemeMobile/en_US/images/category/PRT-TrailerType-Icon-Restroom.png',
                    }}
                  />
                </Card.Content>
              </Card>
              <Text style={styles.cardsText}>
                Restrooms
                <AntDesign size={15} name="right" />
              </Text>
            </View>
            <View style={{width: '45%'}}>
              <Card>
                <Card.Content>
                  <Image
                    style={{width: '100%', height: 100}}
                    source={{
                      uri: 'https://www.portablerestroomtrailers.com/static/frontend/Sjinnovation/PortableThemeMobile/en_US/images/category/PRT-TrailerType-Icon-Shower.png',
                    }}
                  />
                </Card.Content>
              </Card>
              <Text style={styles.cardsText}>
                Shower Trailers
                <AntDesign size={15} name="right" />
              </Text>
            </View>
            <View style={{width: '45%'}}>
              <Card>
                <Card.Content>
                  <Image
                    style={{width: '100%', height: 100}}
                    source={{
                      uri: 'https://www.portablerestroomtrailers.com/static/frontend/Sjinnovation/PortableThemeMobile/en_US/images/category/PRT-TrailerType-Icon-Decon.png',
                    }}
                  />
                </Card.Content>
              </Card>
              <Text style={styles.cardsText}>
                Decon Trailers
                <AntDesign size={15} name="right" />
              </Text>
            </View>
            <View style={{width: '45%'}}>
              <Card>
                <Card.Content>
                  <Image
                    style={{width: '100%', height: 100}}
                    source={{
                      uri: 'https://www.portablerestroomtrailers.com/static/frontend/Sjinnovation/PortableThemeMobile/en_US/images/category/PRT-Home-Icon-commercial.png',
                    }}
                  />
                </Card.Content>
              </Card>
              <Text style={styles.cardsText}>
                Commercial
                <AntDesign size={15} name="right" />
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.blackbgView}>
          <Text style={styles.blackbgText}>
            Portable Restroom Rentals - Made in USA
          </Text>
          <Text style={[styles.blackbgText, {fontSize: 15}]}>
            We know that you want a trustworthy partner that has a wide range of
            trailer options with transparent pricing. You also want a durable
            trailer that was made right here in the USA. You deserve to be
            treated like the very best client every time you interact with us.
            We have helped thousands of businesses, municipalities, and event
            planners by providing the perfect trailer for their needs.
          </Text>
          <Text style={[styles.blackbgText, {fontSize: 15}]}>
            Whether you buy or rent from us, you will experience 5-star service.
            With new purchases, you receive our industry-leading buy-back
            policy. With our large, experienced rental team, we provide you with
            complete service and support. All the information you need to make
            the right decision is at your fingertips. With over 15 years of
            producing and renting the most durable and attractive trailers let
            Portable Restroom Trailers put you first.
          </Text>
          <Text style={styles.blackbgText}>
            Top Quality, Transparent Pricing, Trusted Support. Portable Restroom
            Trailers.
          </Text>
        </View>
        <Text
          style={{
            fontSize: 25,
            textAlign: 'center',
            marginTop: 50,
            fontWeight: 'bold',
          }}>
          Our Customers Love Us
        </Text>
        <View style={styles.stars}>
          <MaterialIcons size={20} name="star" />
          <MaterialIcons size={20} name="star" />
          <MaterialIcons size={20} name="star" />
          <MaterialIcons size={20} name="star" />
          <MaterialIcons size={20} name="star" />
          <Text style={{fontSize: 18, marginLeft: 8}}>5 Rating</Text>
          <Text style={{fontSize: 18, marginLeft: 20}}>327 Reviews</Text>
        </View>
        <FlatList
          data={reviews}
          renderItem={({item}) => (
            <Card style={styles.reviewCard}>
              <Card.Content>
                <Text style={{color: '#ffffff', fontSize: 20}}>
                  {item.name}
                </Text>
                <Text style={{color: '#ffffff', fontSize: 15, marginTop: 10}}>
                  {item.review}
                </Text>
                <View style={styles.reviewStars}>
                  <MaterialIcons color="#ffffff" size={20} name="star" />
                  <MaterialIcons color="#ffffff" size={20} name="star" />
                  <MaterialIcons color="#ffffff" size={20} name="star" />
                  <MaterialIcons color="#ffffff" size={20} name="star" />
                  <MaterialIcons color="#ffffff" size={20} name="star" />
                </View>
                <Text
                  style={{
                    color: '#ffffff',
                    fontSize: 15,
                    marginTop: 30,
                    alignSelf: 'flex-end',
                  }}>
                  {item.posted}
                </Text>
              </Card.Content>
            </Card>
          )}
          horizontal
        />
        <Image
          resizeMode="contain"
          style={{height: 50, width: '30%', alignSelf: 'flex-end'}}
          source={{
            uri: 'https://assets.stickpng.com/images/602e67f57b5b5700048a4ab0.png',
          }}
        />
        <View
          style={{
            marginTop: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={styles.newsBlog}>News / Blog</Text>
          <Button textColor="white" style={styles.overlayButton}>
            All News & Articles
          </Button>
          <View style={{width: '80%', height: 10, margin: 20}}>
            <Divider bold />
          </View>
          <Card style={{width: '80%'}}>
            <Card.Cover
              source={{
                uri: 'https://www.portablerestroomtrailers.com/media/amasty/blog/cache/S/c/320/238/Screen_Shot_2023-09-18_at_3.55.11_PM.png',
              }}
            />
            <Card.Content>
              <Text style={{marginTop: 20, color: '#777777', fontSize: 18}}>
                September 04, 2023
              </Text>
              <Text
                style={{fontSize: 20, color: '#006bb4', fontWeight: 'bold'}}>
                Portable Restrooms for Taylor Sudden Service Texas
              </Text>
              <Text style={{marginTop: 20, color: '#777777', fontSize: 18}}>
                Portable restrooms are a necessity for many service-related
                industries when...
              </Text>
              <TouchableOpacity
                style={{alignSelf: 'flex-start', marginTop: 20}}>
                <Text style={{color: '#92062c', fontWeight: 'bold'}}>
                  Read More <AntDesign name="right" />
                </Text>
              </TouchableOpacity>
            </Card.Content>
          </Card>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    paddingBottom: 60,
  },
  overlayText: {
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginLeft: 15,
    marginRight: 15,
    elevation: 5,
  },
  overlayTextdown: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 50,
    marginRight: 50,
    elevation: 5,
  },
  overlayButton: {
    backgroundColor: '#92062c',
    minWidth: '50%',
  },
  overlaylogos: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    gap: 20,
  },
  blackbgView: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    gap: 20,
  },
  blackbgText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  typesView: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    gap: 20,
    backgroundColor: '#f5f5f5',
    paddingTop: 50,
    paddingBottom: 50,
  },
  typesText: {
    color: '#92062c',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cardsView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
    width: '90%',
  },
  cardsText: {
    textAlign: 'center',
    color: '#92062c',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
  },
  reviewCard: {
    width: Dimensions.get('window').width - 60,
    margin: 10,
    backgroundColor: '#4f4f4f',
    paddingLeft: 20,
    paddingRight: 10,
  },
  stars: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 3,
    marginTop: 10,
  },
  reviewStars: {
    flexDirection: 'row',
    gap: 3,
    marginTop: 10,
  },
  newsBlog: {
    fontSize: 18,
    fontWeight: '600',
    color: '#777777',
    marginBottom: 20,
  },
});

export default Content;
