import React, { ComponentProps } from "react";
import type * as Stitches from "@stitches/react";

import { Meta, Story } from "@storybook/react";
import { Box } from "..";
import {globalStyles} from '..'

type BoxProps = ComponentProps<typeof Box>;

export default {
  title: "Box",
  component: Box,
  decorators: [
    Story => {

      return (
        <Box>{Story()}</Box>
      )
    }
  ],
  parameters: {
    controls: { expanded: true },
  },
} as Meta;

export const box = (args: BoxProps) => {
  return (
    <Box
      {...args}
      css={{
        backgroundColor: args["backgroundColor"],
        color: args["color"],
        fontSize: 16,
        padding: 16,
        borderRadius: args["borderRadius"]
      }}
      as={args["as"]}
    >
      This is a box
    </Box>
  );
};
box.argTypes = {
  ref: { table: { disable: true } },
  css: { table: { disable: true } },
  as: {
    options: ["div", "ul", "span", "table", "h1", "h2", "h3", "p", "button"],
    control: {
      type: "select",
    },
    table: {
      defaultValue: {
        summary: '"div"',
      },
    },
  },
  borderRadius: {
    type: {
      name: "enum",
      value: [
        '$1',
        '$2',
        '$3',
        '$4',
        '$5',
        '$6',
        '$round'
      ]
    },
    defaultValue: "$3",
    control: {
      type: "radio",
    },
    table: {
      defaultValue: {
        summary: '$3',
      },
    },
  },
  backgroundColor: {
    type: {
      name: "enum",
      value: [
        '$scaleWhite',
        '$scaleBlack',
        '$scaleForestGreen100',
        '$scaleForestGreen200',
        '$scaleForestGreen300',
        '$scaleForestGreen400',
        '$scaleForestGreen500',
        '$scaleForestGreen600',
        '$scaleForestGreen700',
        '$scaleForestGreen800',
        '$scaleForestGreen900',
        '$scaleForestGreen000',
        '$scaleSand100',
        '$scaleSand200',
        '$scaleSand300',
        '$scaleSand400',
        '$scaleSand500',
        '$scaleSand600',
        '$scaleSand700',
        '$scaleSand800',
        '$scaleSand900',
        '$scaleSand000',
        '$scaleTeal100',
        '$scaleTeal200',
        '$scaleTeal300',
        '$scaleTeal400',
        '$scaleTeal500',
        '$scaleTeal600',
        '$scaleTeal700',
        '$scaleTeal800',
        '$scaleTeal900',
        '$scaleTeal000',
        '$scaleCharcoal100',
        '$scaleCharcoal200',
        '$scaleCharcoal300',
        '$scaleCharcoal400',
        '$scaleCharcoal500',
        '$scaleCharcoal600',
        '$scaleCharcoal700',
        '$scaleCharcoal800',
        '$scaleCharcoal900',
        '$scaleCharcoal000',
        '$scaleOrange100',
        '$scaleOrange200',
        '$scaleOrange300',
        '$scaleOrange400',
        '$scaleOrange500',
        '$scaleOrange600',
        '$scaleOrange700',
        '$scaleOrange800',
        '$scaleOrange900',
        '$scaleOrange000',
        '$scaleMarigold100',
        '$scaleMarigold200',
        '$scaleMarigold300',
        '$scaleMarigold400',
        '$scaleMarigold500',
        '$scaleMarigold600',
        '$scaleMarigold700',
        '$scaleMarigold800',
        '$scaleMarigold900',
        '$scaleMarigold000',
        '$scalePeach100',
        '$scalePeach200',
        '$scalePeach300',
        '$scalePeach400',
        '$scalePeach500',
        '$scalePeach600',
        '$scalePeach700',
        '$scalePeach800',
        '$scalePeach900',
        '$scalePeach000',
        '$scaleRed100',
        '$scaleRed200',
        '$scaleRed300',
        '$scaleRed400',
        '$scaleRed500',
        '$scaleRed600',
        '$scaleRed700',
        '$scaleRed800',
        '$scaleRed900',
        '$scaleRed000',
        '$scaleGreen100',
        '$scaleGreen200',
        '$scaleGreen300',
        '$scaleGreen400',
        '$scaleGreen500',
        '$scaleGreen600',
        '$scaleGreen700',
        '$scaleGreen800',
        '$scaleGreen900',
        '$scaleGreen000',
        '$scalePurple100',
        '$scalePurple200',
        '$scalePurple300',
        '$scalePurple400',
        '$scalePurple500',
        '$scalePurple600',
        '$scalePurple700',
        '$scalePurple800',
        '$scalePurple900',
        '$scalePurple000',
        '$scaleBlue100',
        '$scaleBlue200',
        '$scaleBlue300',
        '$scaleBlue400',
        '$scaleBlue500',
        '$scaleBlue600',
        '$scaleBlue700',
        '$scaleBlue800',
        '$scaleBlue900',
        '$scaleBlue000',
        '$scaleNeutral100',
        '$scaleNeutral200',
        '$scaleNeutral300',
        '$scaleNeutral400',
        '$scaleNeutral500',
        '$scaleNeutral600',
        '$scaleNeutral700',
        '$scaleNeutral800',
        '$scaleNeutral900',
        '$scaleNeutral1000',
        '$scaleNeutral1100',
        '$scaleNeutral000',
        '$scaleNeutralAlpha100',
        '$scaleNeutralAlpha200',
        '$scaleNeutralAlpha300',
        '$scaleNeutralAlpha400',
        '$scaleNeutralAlpha500',
        '$scaleNeutralAlpha000',
        '$scaleTransparentAlpha100',
        '$scaleTransparentAlpha200',
        '$scaleTransparentAlpha300',
        '$scaleTransparentAlpha400',
        '$scaleTransparentAlpha500',
        '$scaleTransparentAlpha000',
        '$textDefault',
        '$textSubtle',
        '$textSubtlest',
        '$textDanger',
        '$textSuccess',
        '$textDiscovery',
        '$textInformation',
        '$textWarningDefault',
        '$textWarningInverse',
        '$textAccentNeutral',
        '$textAccentBold',
        '$textAccentSubtle',
        '$textAccentForestGreenDefault',
        '$textAccentForestGreenBolder',
        '$textAccentOrangeDefault',
        '$textAccentOrangeBolder',
        '$textAccentTealDefault',
        '$textAccentTealBolder',
        '$textAccentPeachDefault',
        '$textAccentPeachBolder',
        '$textAccentCharcoalDefault',
        '$textAccentCharcoalBolder',
        '$textAccentSandDefault',
        '$textAccentSandBolder',
        '$textAccentMarigoldDefault',
        '$textAccentMarigoldBolder',
        '$textAccentGreenDefault',
        '$textAccentGreenBolder',
        '$textAccentBlueDefault',
        '$textAccentBlueBolder',
        '$textAccentRedDefault',
        '$textAccentRedBolder',
        '$textAccentPurpleDefault',
        '$textAccentPurpleBolder',
        '$textForestGreenDefault',
        '$textForestGreenBolder',
        '$textOrangeDefault',
        '$textOrangeBolder',
        '$textTealDefault',
        '$textTealBolder',
        '$textPeachDefault',
        '$textPeachBolder',
        '$textCharcoalDefault',
        '$textCharcoalBolder',
        '$textSandDefault',
        '$textSandBolder',
        '$textMarigoldDefault',
        '$textMarigoldBolder',
        '$textGreenDefault',
        '$textGreenBolder',
        '$textBlueDefault',
        '$textBlueBolder',
        '$textRedDefault',
        '$textRedBolder',
        '$textPurpleDefault',
        '$textPurpleBolder',
        '$textSucess',
        '$textInverse',
        '$textLinkDefault',
        '$textLinkHovered',
        '$surfaceDefault',
        '$surfaceRaised',
        '$borderDefault',
        '$borderSubtle',
        '$borderSubtlest',
        '$borderDanger',
        '$borderSuccess',
        '$borderInformation',
        '$borderDiscovery',
        '$borderWarning',
        '$borderFocused',
        '$borderInput',
        '$borderDisabled',
        '$borderBrand',
        '$borderSelected',
        '$borderAccentBlue',
        '$borderAccentRed',
        '$borderAccentOrange',
        '$borderAccentMarigold',
        '$borderAccentGreen',
        '$borderAccentForestGreen',
        '$borderAccentPurple',
        '$borderAccentTeal',
        '$borderAccentPeach',
        '$backgroundDisabled',
        '$backgroundAccentBlueSubtlest',
        '$backgroundAccentBlueSubtler',
        '$backgroundAccentBlueSubtle',
        '$backgroundAccentBlueBolder',
        '$backgroundAccentRedSubtlest',
        '$backgroundAccentRedSubtler',
        '$backgroundAccentRedSubtle',
        '$backgroundAccentRedBolder',
        '$backgroundAccentOrangeSubtlest',
        '$backgroundAccentOrangeSubtler',
        '$backgroundAccentOrangeSubtle',
        '$backgroundAccentOrangeBolder',
        '$backgroundAccentMarigoldSubtlest',
        '$backgroundAccentMarigoldSubtler',
        '$backgroundAccentMarigoldSubtle',
        '$backgroundAccentMarigoldBolder',
        '$backgroundAccentGreenSubtlest',
        '$backgroundAccentGreenSubtler',
        '$backgroundAccentGreenSubtle',
        '$backgroundAccentGreenBolder',
        '$backgroundAccentForestGreenSubtlest',
        '$backgroundAccentForestGreenSubtler',
        '$backgroundAccentForestGreenSubtle',
        '$backgroundAccentForestGreenBolder',
        '$backgroundAccentTealSubtlest',
        '$backgroundAccentTealSubtler',
        '$backgroundAccentTealSubtle',
        '$backgroundAccentTealBolder',
        '$backgroundAccentPurpleSubtlest',
        '$backgroundAccentPurpleSubtler',
        '$backgroundAccentPurpleSubtle',
        '$backgroundAccentPurpleBolder',
        '$backgroundAccentPeachSubtlest',
        '$backgroundAccentPeachSubtler',
        '$backgroundAccentPeachSubtle',
        '$backgroundAccentPeachBolder',
        '$backgroundInverseSubtleDefault',
        '$backgroundInverseSubtleHovered',
        '$backgroundInverseSubtlePressed',
        '$backgroundInputDefault',
        '$backgroundInputHovered',
        '$backgroundInputPressed',
        '$backgroundNeutralDefaultDefault',
        '$backgroundNeutralDefaultHovered',
        '$backgroundNeutralDefaultPressed',
        '$backgroundNeutralSubtleDefault',
        '$backgroundNeutralSubtleHovered',
        '$backgroundNeutralSubtlePressed',
        '$backgroundNeutralBoldDefault',
        '$backgroundNeutralBoldHovered',
        '$backgroundNeutralBoldPressed',
        '$backgroundBrandBoldDefault',
        '$backgroundBrandBoldHovered',
        '$backgroundBrandBoldPressed',
        '$backgroundSelectedDefaultDefault',
        '$backgroundSelectedDefaultHovered',
        '$backgroundSelectedDefaultPressed',
        '$backgroundSelectedBoldDefault',
        '$backgroundSelectedBoldHovered',
        '$backgroundSelectedBoldPressed',
        '$backgroundDangerDefaultDefault',
        '$backgroundDangerDefaultHovered',
        '$backgroundDangerDefaultPressed',
        '$backgroundDangerBoldDefault',
        '$backgroundDangerBoldHovered',
        '$backgroundDangerBoldPressed',
        '$backgroundWarningDefaultDefault',
        '$backgroundWarningDefaultHovered',
        '$backgroundWarningDefaultPressed',
        '$backgroundWarningBoldDefault',
        '$backgroundWarningBoldHovered',
        '$backgroundWarningBoldPressed',
        '$backgroundSuccessDefaultDefault',
        '$backgroundSuccessDefaultHovered',
        '$backgroundSuccessDefaultPressed',
        '$backgroundSuccessBoldDefault',
        '$backgroundSuccessBoldHovered',
        '$backgroundSuccessBoldPressed',
        '$backgroundDiscoveryDefaultDefault',
        '$backgroundDiscoveryDefaultHovered',
        '$backgroundDiscoveryDefaultPressed',
        '$backgroundDiscoveryBoldDefault',
        '$backgroundDiscoveryBoldHovered',
        '$backgroundDiscoveryBoldPressed',
        '$backgroundInformationDefaultDefault',
        '$backgroundInformationDefaultHovered',
        '$backgroundInformationDefaultPressed',
        '$backgroundInformationBoldDefault',
        '$backgroundInformationBoldHovered',
        '$backgroundInformationBoldPressed',
        '$iconDefault',
        '$iconSubtle',
        '$iconInverse',
        '$iconDisabled',
        '$iconBrand',
        '$iconSelected',
        '$iconDanger',
        '$iconSuccess',
        '$iconDiscovery',
        '$iconInformation',
        '$iconAccentBlue',
        '$iconAccentRed',
        '$iconAccentOrange',
        '$iconAccentMarigold',
        '$iconAccentGreen',
        '$iconAccentForestGreen',
        '$iconAccentPurple',
        '$iconAccentTeal',
        '$iconAccentPeach',
        '$iconWarningDefault',
        '$iconWarningInverse',
        '$linkDefault',
        '$linkPressed',
      ],
    },
    defaultValue: "$backgroundAccentForestGreenBolder",
    control: {
      type: "select",
    },
    table: {
      defaultValue: {
        summary: '"$backgroundAccentForestGreenBolder"',
      },
    },
  },
  color: {
    type: {
      name: "enum",
      value: [
        '$scaleWhite',
        '$scaleBlack',
        '$scaleForestGreen100',
        '$scaleForestGreen200',
        '$scaleForestGreen300',
        '$scaleForestGreen400',
        '$scaleForestGreen500',
        '$scaleForestGreen600',
        '$scaleForestGreen700',
        '$scaleForestGreen800',
        '$scaleForestGreen900',
        '$scaleForestGreen000',
        '$scaleSand100',
        '$scaleSand200',
        '$scaleSand300',
        '$scaleSand400',
        '$scaleSand500',
        '$scaleSand600',
        '$scaleSand700',
        '$scaleSand800',
        '$scaleSand900',
        '$scaleSand000',
        '$scaleTeal100',
        '$scaleTeal200',
        '$scaleTeal300',
        '$scaleTeal400',
        '$scaleTeal500',
        '$scaleTeal600',
        '$scaleTeal700',
        '$scaleTeal800',
        '$scaleTeal900',
        '$scaleTeal000',
        '$scaleCharcoal100',
        '$scaleCharcoal200',
        '$scaleCharcoal300',
        '$scaleCharcoal400',
        '$scaleCharcoal500',
        '$scaleCharcoal600',
        '$scaleCharcoal700',
        '$scaleCharcoal800',
        '$scaleCharcoal900',
        '$scaleCharcoal000',
        '$scaleOrange100',
        '$scaleOrange200',
        '$scaleOrange300',
        '$scaleOrange400',
        '$scaleOrange500',
        '$scaleOrange600',
        '$scaleOrange700',
        '$scaleOrange800',
        '$scaleOrange900',
        '$scaleOrange000',
        '$scaleMarigold100',
        '$scaleMarigold200',
        '$scaleMarigold300',
        '$scaleMarigold400',
        '$scaleMarigold500',
        '$scaleMarigold600',
        '$scaleMarigold700',
        '$scaleMarigold800',
        '$scaleMarigold900',
        '$scaleMarigold000',
        '$scalePeach100',
        '$scalePeach200',
        '$scalePeach300',
        '$scalePeach400',
        '$scalePeach500',
        '$scalePeach600',
        '$scalePeach700',
        '$scalePeach800',
        '$scalePeach900',
        '$scalePeach000',
        '$scaleRed100',
        '$scaleRed200',
        '$scaleRed300',
        '$scaleRed400',
        '$scaleRed500',
        '$scaleRed600',
        '$scaleRed700',
        '$scaleRed800',
        '$scaleRed900',
        '$scaleRed000',
        '$scaleGreen100',
        '$scaleGreen200',
        '$scaleGreen300',
        '$scaleGreen400',
        '$scaleGreen500',
        '$scaleGreen600',
        '$scaleGreen700',
        '$scaleGreen800',
        '$scaleGreen900',
        '$scaleGreen000',
        '$scalePurple100',
        '$scalePurple200',
        '$scalePurple300',
        '$scalePurple400',
        '$scalePurple500',
        '$scalePurple600',
        '$scalePurple700',
        '$scalePurple800',
        '$scalePurple900',
        '$scalePurple000',
        '$scaleBlue100',
        '$scaleBlue200',
        '$scaleBlue300',
        '$scaleBlue400',
        '$scaleBlue500',
        '$scaleBlue600',
        '$scaleBlue700',
        '$scaleBlue800',
        '$scaleBlue900',
        '$scaleBlue000',
        '$scaleNeutral100',
        '$scaleNeutral200',
        '$scaleNeutral300',
        '$scaleNeutral400',
        '$scaleNeutral500',
        '$scaleNeutral600',
        '$scaleNeutral700',
        '$scaleNeutral800',
        '$scaleNeutral900',
        '$scaleNeutral1000',
        '$scaleNeutral1100',
        '$scaleNeutral000',
        '$scaleNeutralAlpha100',
        '$scaleNeutralAlpha200',
        '$scaleNeutralAlpha300',
        '$scaleNeutralAlpha400',
        '$scaleNeutralAlpha500',
        '$scaleNeutralAlpha000',
        '$scaleTransparentAlpha100',
        '$scaleTransparentAlpha200',
        '$scaleTransparentAlpha300',
        '$scaleTransparentAlpha400',
        '$scaleTransparentAlpha500',
        '$scaleTransparentAlpha000',
        '$textDefault',
        '$textSubtle',
        '$textSubtlest',
        '$textDanger',
        '$textSuccess',
        '$textDiscovery',
        '$textInformation',
        '$textWarningDefault',
        '$textWarningInverse',
        '$textAccentNeutral',
        '$textAccentBold',
        '$textAccentSubtle',
        '$textAccentForestGreenDefault',
        '$textAccentForestGreenBolder',
        '$textAccentOrangeDefault',
        '$textAccentOrangeBolder',
        '$textAccentTealDefault',
        '$textAccentTealBolder',
        '$textAccentPeachDefault',
        '$textAccentPeachBolder',
        '$textAccentCharcoalDefault',
        '$textAccentCharcoalBolder',
        '$textAccentSandDefault',
        '$textAccentSandBolder',
        '$textAccentMarigoldDefault',
        '$textAccentMarigoldBolder',
        '$textAccentGreenDefault',
        '$textAccentGreenBolder',
        '$textAccentBlueDefault',
        '$textAccentBlueBolder',
        '$textAccentRedDefault',
        '$textAccentRedBolder',
        '$textAccentPurpleDefault',
        '$textAccentPurpleBolder',
        '$textForestGreenDefault',
        '$textForestGreenBolder',
        '$textOrangeDefault',
        '$textOrangeBolder',
        '$textTealDefault',
        '$textTealBolder',
        '$textPeachDefault',
        '$textPeachBolder',
        '$textCharcoalDefault',
        '$textCharcoalBolder',
        '$textSandDefault',
        '$textSandBolder',
        '$textMarigoldDefault',
        '$textMarigoldBolder',
        '$textGreenDefault',
        '$textGreenBolder',
        '$textBlueDefault',
        '$textBlueBolder',
        '$textRedDefault',
        '$textRedBolder',
        '$textPurpleDefault',
        '$textPurpleBolder',
        '$textSucess',
        '$textInverse',
        '$textLinkDefault',
        '$textLinkHovered',
        '$surfaceDefault',
        '$surfaceRaised',
        '$borderDefault',
        '$borderSubtle',
        '$borderSubtlest',
        '$borderDanger',
        '$borderSuccess',
        '$borderInformation',
        '$borderDiscovery',
        '$borderWarning',
        '$borderFocused',
        '$borderInput',
        '$borderDisabled',
        '$borderBrand',
        '$borderSelected',
        '$borderAccentBlue',
        '$borderAccentRed',
        '$borderAccentOrange',
        '$borderAccentMarigold',
        '$borderAccentGreen',
        '$borderAccentForestGreen',
        '$borderAccentPurple',
        '$borderAccentTeal',
        '$borderAccentPeach',
        '$backgroundDisabled',
        '$backgroundAccentBlueSubtlest',
        '$backgroundAccentBlueSubtler',
        '$backgroundAccentBlueSubtle',
        '$backgroundAccentBlueBolder',
        '$backgroundAccentRedSubtlest',
        '$backgroundAccentRedSubtler',
        '$backgroundAccentRedSubtle',
        '$backgroundAccentRedBolder',
        '$backgroundAccentOrangeSubtlest',
        '$backgroundAccentOrangeSubtler',
        '$backgroundAccentOrangeSubtle',
        '$backgroundAccentOrangeBolder',
        '$backgroundAccentMarigoldSubtlest',
        '$backgroundAccentMarigoldSubtler',
        '$backgroundAccentMarigoldSubtle',
        '$backgroundAccentMarigoldBolder',
        '$backgroundAccentGreenSubtlest',
        '$backgroundAccentGreenSubtler',
        '$backgroundAccentGreenSubtle',
        '$backgroundAccentGreenBolder',
        '$backgroundAccentForestGreenSubtlest',
        '$backgroundAccentForestGreenSubtler',
        '$backgroundAccentForestGreenSubtle',
        '$backgroundAccentForestGreenBolder',
        '$backgroundAccentTealSubtlest',
        '$backgroundAccentTealSubtler',
        '$backgroundAccentTealSubtle',
        '$backgroundAccentTealBolder',
        '$backgroundAccentPurpleSubtlest',
        '$backgroundAccentPurpleSubtler',
        '$backgroundAccentPurpleSubtle',
        '$backgroundAccentPurpleBolder',
        '$backgroundAccentPeachSubtlest',
        '$backgroundAccentPeachSubtler',
        '$backgroundAccentPeachSubtle',
        '$backgroundAccentPeachBolder',
        '$backgroundInverseSubtleDefault',
        '$backgroundInverseSubtleHovered',
        '$backgroundInverseSubtlePressed',
        '$backgroundInputDefault',
        '$backgroundInputHovered',
        '$backgroundInputPressed',
        '$backgroundNeutralDefaultDefault',
        '$backgroundNeutralDefaultHovered',
        '$backgroundNeutralDefaultPressed',
        '$backgroundNeutralSubtleDefault',
        '$backgroundNeutralSubtleHovered',
        '$backgroundNeutralSubtlePressed',
        '$backgroundNeutralBoldDefault',
        '$backgroundNeutralBoldHovered',
        '$backgroundNeutralBoldPressed',
        '$backgroundBrandBoldDefault',
        '$backgroundBrandBoldHovered',
        '$backgroundBrandBoldPressed',
        '$backgroundSelectedDefaultDefault',
        '$backgroundSelectedDefaultHovered',
        '$backgroundSelectedDefaultPressed',
        '$backgroundSelectedBoldDefault',
        '$backgroundSelectedBoldHovered',
        '$backgroundSelectedBoldPressed',
        '$backgroundDangerDefaultDefault',
        '$backgroundDangerDefaultHovered',
        '$backgroundDangerDefaultPressed',
        '$backgroundDangerBoldDefault',
        '$backgroundDangerBoldHovered',
        '$backgroundDangerBoldPressed',
        '$backgroundWarningDefaultDefault',
        '$backgroundWarningDefaultHovered',
        '$backgroundWarningDefaultPressed',
        '$backgroundWarningBoldDefault',
        '$backgroundWarningBoldHovered',
        '$backgroundWarningBoldPressed',
        '$backgroundSuccessDefaultDefault',
        '$backgroundSuccessDefaultHovered',
        '$backgroundSuccessDefaultPressed',
        '$backgroundSuccessBoldDefault',
        '$backgroundSuccessBoldHovered',
        '$backgroundSuccessBoldPressed',
        '$backgroundDiscoveryDefaultDefault',
        '$backgroundDiscoveryDefaultHovered',
        '$backgroundDiscoveryDefaultPressed',
        '$backgroundDiscoveryBoldDefault',
        '$backgroundDiscoveryBoldHovered',
        '$backgroundDiscoveryBoldPressed',
        '$backgroundInformationDefaultDefault',
        '$backgroundInformationDefaultHovered',
        '$backgroundInformationDefaultPressed',
        '$backgroundInformationBoldDefault',
        '$backgroundInformationBoldHovered',
        '$backgroundInformationBoldPressed',
        '$iconDefault',
        '$iconSubtle',
        '$iconInverse',
        '$iconDisabled',
        '$iconBrand',
        '$iconSelected',
        '$iconDanger',
        '$iconSuccess',
        '$iconDiscovery',
        '$iconInformation',
        '$iconAccentBlue',
        '$iconAccentRed',
        '$iconAccentOrange',
        '$iconAccentMarigold',
        '$iconAccentGreen',
        '$iconAccentForestGreen',
        '$iconAccentPurple',
        '$iconAccentTeal',
        '$iconAccentPeach',
        '$iconWarningDefault',
        '$iconWarningInverse',
        '$linkDefault',
        '$linkPressed',
      ],
      // all html colors:
      // value: [
      //   "aliceblue",
      //   "antiquewhite",
      //   "aqua",
      //   "aquamarine",
      //   "azure",
      //   "beige",
      //   "bisque",
      //   "black",
      //   "blanchedalmond",
      //   "blue",
      //   "blueviolet",
      //   "brown",
      //   "burlywood",
      //   "cadetblue",
      //   "chartreuse",
      //   "chocolate",
      //   "coral",
      //   "cornflowerblue",
      //   "cornsilk",
      //   "crimson",
      //   "cyan",
      //   "darkblue",
      //   "darkcyan",
      //   "darkgoldenrod",
      //   "darkgray",
      //   "darkgreen",
      //   "darkgrey",
      //   "darkkhaki",
      //   "darkmagenta",
      //   "darkolivegreen",
      //   "darkorange",
      //   "darkorchid",
      //   "darkred",
      //   "darksalmon",
      //   "darkseagreen",
      //   "darkslateblue",
      //   "darkslategray",
      //   "darkslategrey",
      //   "darkturquoise",
      //   "darkviolet",
      //   "deeppink",
      //   "deepskyblue",
      //   "dimgray",
      //   "dimgrey",
      //   "dodgerblue",
      //   "firebrick",
      //   "floralwhite",
      //   "forestgreen",
      //   "fuchsia",
      //   "gainsboro",
      //   "ghostwhite",
      //   "gold",
      //   "goldenrod",
      //   "gray",
      //   "green",
      //   "greenyellow",
      //   "grey",
      //   "honeydew",
      //   "hotpink",
      //   "indianred",
      //   "indigo",
      //   "ivory",
      //   "khaki",
      //   "lavender",
      //   "lavenderblush",
      //   "lawngreen",
      //   "lemonchiffon",
      //   "lightblue",
      //   "lightcoral",
      //   "lightcyan",
      //   "lightgoldenrodyellow",
      //   "lightgray",
      //   "lightgreen",
      //   "lightgrey",
      //   "lightpink",
      //   "lightsalmon",
      //   "lightseagreen",
      //   "lightskyblue",
      //   "lightslategray",
      //   "lightslategrey",
      //   "lightsteelblue",
      //   "lightyellow",
      //   "lime",
      //   "limegreen",
      //   "linen",
      //   "magenta",
      //   "maroon",
      //   "mediumaquamarine",
      //   "mediumblue",
      //   "mediumorchid",
      //   "mediumpurple",
      //   "mediumseagreen",
      //   "mediumslateblue",
      //   "mediumspringgreen",
      //   "mediumturquoise",
      //   "mediumvioletred",
      //   "midnightblue",
      //   "mintcream",
      //   "mistyrose",
      //   "moccasin",
      //   "navajowhite",
      //   "navy",
      //   "oldlace",
      //   "olive",
      //   "olivedrab",
      //   "orange",
      //   "orangered",
      //   "orchid",
      //   "palegoldenrod",
      //   "palegreen",
      //   "paleturquoise",
      //   "palevioletred",
      //   "papayawhip",
      //   "peachpuff",
      //   "peru",
      //   "pink",
      //   "plum",
      //   "powderblue",
      //   "purple",
      //   "red",
      //   "rosybrown",
      //   "royalblue",
      //   "saddlebrown",
      //   "salmon",
      //   "sandybrown",
      //   "seagreen",
      //   "seashell",
      //   "sienna",
      //   "silver",
      //   "skyblue",
      //   "slateblue",
      //   "slategray",
      //   "slategrey",
      //   "snow",
      //   "springgreen",
      //   "steelblue",
      //   "tan",
      //   "teal",
      //   "thistle",
      //   "tomato",
      //   "turquoise",
      //   "saddlebrown",
      //   "violet",
      //   "wheat",
      //   "white",
      //   "whitesmoke",
      //   "yellow",
      //   "yellowgreen",
      // ],
    },
    defaultValue: "$textAccentSandDefault",
    control: {
      type: "select",
    },
    table: {
      defaultValue: {
        summary: '"$textAccentSandDefault"',
      },
    },
  },
};
box.args = {
  backgroundColor: "$backgroundAccentForestGreenBolder",
  color: "$textAccentSandDefault",
  as: "div",
};
box.storyName = "Box";
