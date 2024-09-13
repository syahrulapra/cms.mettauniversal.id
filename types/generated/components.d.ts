import type { Schema, Attribute } from '@strapi/strapi';

export interface ProductsSectionProductsSection extends Schema.Component {
  collectionName: 'components_products_section_products_sections';
  info: {
    displayName: 'products-section';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    title: Attribute.String;
    description: Attribute.Text;
    products: Attribute.Relation<
      'products-section.products-section',
      'oneToMany',
      'api::product.product'
    >;
  };
}

export interface SeoSeo extends Schema.Component {
  collectionName: 'components_seo_seos';
  info: {
    displayName: 'seo';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface OurVisionAndMissionSectionOurVisionAndMissionSection
  extends Schema.Component {
  collectionName: 'components_our_vision_and_mission_section_our_vision_and_mission_sections';
  info: {
    displayName: 'our-vision-and-mission-section';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    vision_and_mission_card: Attribute.Component<
      'our-vision-and-mission-card.our-vision-and-mission-card',
      true
    >;
  };
}

export interface OurVisionAndMissionCardOurVisionAndMissionCard
  extends Schema.Component {
  collectionName: 'components_our_vision_and_mission_card_our_vision_and_mission_cards';
  info: {
    displayName: 'our-vision-and-mission-card';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    background: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    description: Attribute.Text;
  };
}

export interface ListList extends Schema.Component {
  collectionName: 'components_list_lists';
  info: {
    displayName: 'list';
  };
  attributes: {
    list_name: Attribute.Text;
  };
}

export interface HeroSectionHeroSection extends Schema.Component {
  collectionName: 'components_hero_section_hero_sections';
  info: {
    displayName: 'hero-section';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    title: Attribute.Text;
    description: Attribute.Text;
    thumbnail: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    button: Attribute.String;
  };
}

export interface ContentContactUsContentContactUs extends Schema.Component {
  collectionName: 'components_content_contact_us_content_contact_uses';
  info: {
    displayName: 'content-contact-us';
  };
  attributes: {
    title: Attribute.Text;
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ContactSectionContactSection extends Schema.Component {
  collectionName: 'components_contact_section_contact_sections';
  info: {
    displayName: 'contact-section';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    background: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    button: Attribute.String;
  };
}

export interface AboutSectionAboutSection extends Schema.Component {
  collectionName: 'components_about_section_about_sections';
  info: {
    displayName: 'about-section';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    title: Attribute.String;
    description: Attribute.Text;
    thumbnail: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'products-section.products-section': ProductsSectionProductsSection;
      'seo.seo': SeoSeo;
      'our-vision-and-mission-section.our-vision-and-mission-section': OurVisionAndMissionSectionOurVisionAndMissionSection;
      'our-vision-and-mission-card.our-vision-and-mission-card': OurVisionAndMissionCardOurVisionAndMissionCard;
      'list.list': ListList;
      'hero-section.hero-section': HeroSectionHeroSection;
      'content-contact-us.content-contact-us': ContentContactUsContentContactUs;
      'contact-section.contact-section': ContactSectionContactSection;
      'about-section.about-section': AboutSectionAboutSection;
    }
  }
}
