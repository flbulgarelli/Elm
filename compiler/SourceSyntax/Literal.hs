{-# LANGUAGE DeriveDataTypeable #-}
module SourceSyntax.Literal where

import Data.Data
import SourceSyntax.PrettyPrint
import qualified Text.PrettyPrint as PP

data Literal = IntNum Int
             | FloatNum Double
             | Chr Char
             | Str String
             | Boolean Bool
               deriving (Eq, Ord, Data, Typeable, Show)

instance Pretty Literal where
  pretty literal =
    case literal of
      IntNum n -> PP.int n
      FloatNum n -> PP.double n
      Chr c -> PP.quotes (PP.char c)
      Str s -> PP.text (show s)
      Boolean bool -> PP.text (show bool)