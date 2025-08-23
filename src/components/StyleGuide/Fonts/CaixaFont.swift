//
//  CaixaFont.swift
//  CaixaMaisUI
//
//  Created by Danilo Carlos Ribeiro on 09/04/2024.
//  Copyright © 2024 CAIXA. All rights reserved.
//

import UIKit

public enum CaixaFont: String {
    case bold = "CAIXAStd-Bold"
    case boldItalic = "CAIXAStd-BoldItalic"
    case book = "CAIXAStd-Book"
    case bookItalic = "CAIXAStd-BookItalic"
    case extraBold = "CAIXAStd-ExtraBold"
    case extraBoldItalic = "CAIXAStd-ExtraBoldItalic"
    case italic = "CAIXAStd-Italic"
    case light = "CAIXAStd-Light"
    case lightItalic = "CAIXAStd-LightItalic"
    case regular = "CAIXAStd-Regular"
    case semiBold = "CAIXAStd-SemiBold"
    case semiBoldItalic = "CAIXAStd-SemiBoldItalic"
    
    var fontName: String {
        return self.rawValue
    }
}

public extension UIFont {
    static func caixaFont(_ font: CaixaFont,
                          textStyle: UIFont.TextStyle = .body,
                          size: CGFloat) -> UIFont {
        let defaultFont = UIFont.systemFont(ofSize: size)
        let caixaFont = UIFont(name: font.fontName, size: size)
        let baseFont = caixaFont ?? defaultFont
        if size < 24 {
            let stylisticFeature = [
                UIFontDescriptor.FeatureKey.featureIdentifier: kStylisticAlternativesType,
                UIFontDescriptor.FeatureKey.typeIdentifier: kStylisticAltOneOnSelector,
            ]
            let descriptionWithFeatures = baseFont.fontDescriptor.addingAttributes([.featureSettings: [stylisticFeature]])
            let fontWithFeatures = UIFont(descriptor: descriptionWithFeatures, size: size)
            let metrics = UIFontMetrics(forTextStyle: textStyle)
            return metrics.scaledFont(for: fontWithFeatures)
        }
        let metrics = UIFontMetrics(forTextStyle: textStyle)
        return metrics.scaledFont(for: baseFont)
    }
}
