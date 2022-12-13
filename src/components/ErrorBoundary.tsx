import { Component, ReactNode } from 'react'

interface Props {
  fallback: ReactNode
  children?: ReactNode
}

interface State {
  hasError: boolean
}
export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  }

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback
    }

    return this.props.children
  }
}
