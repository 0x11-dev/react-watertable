// @flow

export type BaseColumn = {| title: string, multiple?: boolean |}

export type TextColumn = {|
  ...BaseColumn,
  type: "text"
|}

export type SelectColumn = {|
  ...BaseColumn,
  type: "select"
|}

export type FileColumn = {|
  ...BaseColumn,
  type: "file"
|}

export type ImageColumn = {|
  ...BaseColumn,
  type: "image"
|}

export type BooleanColumn = {|
  ...BaseColumn,
  type: "boolean"
|}

export type NumericColumn = {|
  ...BaseColumn,
  type: "numeric"
|}

export type ColumnSchema =
  | TextColumn
  | SelectColumn
  | FileColumn
  | ImageColumn
  | BooleanColumn
  | NumericColumn

export type TableSchema = {
  [columnId: string]: ColumnSchema
}