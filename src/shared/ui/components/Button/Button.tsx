import { chakra, useRecipe, ButtonProps as ChakraButtonProps } from '@chakra-ui/react'
import type { RecipeVariantProps } from '@chakra-ui/react'
import React, { FC } from 'react'
import { buttonRecipe } from './button.recipe'

type ButtonVariantProps = RecipeVariantProps<typeof buttonRecipe>

export interface ButtonProps extends React.PropsWithChildren<ButtonVariantProps>, Omit<ChakraButtonProps, 'size'> {}

export const Button: FC<ButtonProps> = (props) => {
  const { visual, size, ...restProps } = props

  const recipe = useRecipe({ recipe: buttonRecipe })
  const styles = recipe({ visual, size })

  return <chakra.button css={styles} {...restProps} />
}
