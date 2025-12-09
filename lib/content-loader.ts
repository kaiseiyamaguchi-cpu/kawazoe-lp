import fs from 'fs'
import path from 'path'
import { parse } from 'csv-parse/sync'

export interface ContentItem {
  section: string
  type: string
  id: string
  text: string
}

export interface ImageItem {
  section: string
  image_id: string
  filename: string
  recommended_width: string
  recommended_height: string
  aspect_ratio: string
  alt_text: string
  description: string
}

// テキストコンテンツを読み込む
export function loadContent(): Record<string, string> {
  const contentPath = path.join(process.cwd(), 'data', 'content.csv')
  const fileContent = fs.readFileSync(contentPath, 'utf-8')
  
  const records = parse(fileContent, {
    columns: true,
    skip_empty_lines: true,
  }) as ContentItem[]

  // id をキーとした Map に変換
  const contentMap: Record<string, string> = {}
  records.forEach((record) => {
    contentMap[record.id] = record.text
  })

  return contentMap
}

// 画像情報を読み込む
export function loadImages(): Record<string, ImageItem> {
  const imagesPath = path.join(process.cwd(), 'data', 'images.csv')
  const fileContent = fs.readFileSync(imagesPath, 'utf-8')
  
  const records = parse(fileContent, {
    columns: true,
    skip_empty_lines: true,
  }) as ImageItem[]

  // image_id をキーとした Map に変換
  const imagesMap: Record<string, ImageItem> = {}
  records.forEach((record) => {
    imagesMap[record.image_id] = record
  })

  return imagesMap
}

// 特定のセクションのコンテンツを取得
export function getContentBySection(section: string): Record<string, string> {
  const contentPath = path.join(process.cwd(), 'data', 'content.csv')
  const fileContent = fs.readFileSync(contentPath, 'utf-8')
  
  const records = parse(fileContent, {
    columns: true,
    skip_empty_lines: true,
  }) as ContentItem[]

  const sectionContent: Record<string, string> = {}
  records
    .filter((record) => record.section === section)
    .forEach((record) => {
      sectionContent[record.id] = record.text
    })

  return sectionContent
}

// 特定のセクションの画像を取得
export function getImagesBySection(section: string): Record<string, ImageItem> {
  const imagesPath = path.join(process.cwd(), 'data', 'images.csv')
  const fileContent = fs.readFileSync(imagesPath, 'utf-8')
  
  const records = parse(fileContent, {
    columns: true,
    skip_empty_lines: true,
  }) as ImageItem[]

  const sectionImages: Record<string, ImageItem> = {}
  records
    .filter((record) => record.section === section)
    .forEach((record) => {
      sectionImages[record.image_id] = record
    })

  return sectionImages
}
