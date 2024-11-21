import React, { useState } from 'react'
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"
import { Checkbox } from "../components/ui/checkbox"
import { Eye, EyeOff } from 'lucide-react'
import Logo from '../assets/logo.png'
import ParticlesBackground from '../components/ui/ParticlesBackground'

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const response = await fetch('https://api.example.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, rememberMe }),
      })

      if (!response.ok) {
        throw new Error('Login failed')
      }

      const data = await response.json()
      console.log('Login successful', data)
        // Here you would typically store the token and redirect the user
    } catch (err) {
      setError('An error occurred during login. Please try again.')
      console.error('Login error:', err)
    } finally {
      setIsLoading(false)
    }
  }

    return (
      <div className="min-h-screen flex flex-col justify-center items-center p-4 relative">
        <ParticlesBackground />
        <div className="w-full max-w-md relative z-10">
          <div className="mb-8 text-center">
            <img
              width="240"
              src={Logo}
              className="mx-auto mb-4"
            />
          </div>
          
          <div className="bg-card rounded-lg shadow-xl p-6">
            <h2 className="text-3xl font-bold mb-6 mt-2 text-center">Log<span className="text-primary">in</span></h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-card-foreground mb-1">Username</label>
                <Input 
                  id="username" 
                  type="text" 
                  placeholder="username" 
                  className="w-full" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-card-foreground mb-1">Password</label>
                <div className="relative">
                  <Input 
                    id="password" 
                    type={showPassword ? "text" : "password"} 
                    placeholder="••••••••" 
                    className="w-full pr-10" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <Eye className="h-4 w-4 text-muted-foreground" />
                    )}
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Checkbox 
                    id="remember" 
                    checked={rememberMe}
                    onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                  />
                  <label htmlFor="remember" className="ml-2 block text-sm text-muted-foreground">
                    Remember me
                  </label>
                </div>
                <a href="/forgot-password" className="text-sm text-primary hover:underline">
                  Forgot password?
                </a>
              </div>
              {error && (
                <div className="text-destructive text-sm">{error}</div>
              )}
              <Button 
                type="submit" 
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12"
                disabled={isLoading}
              >
                {isLoading ? 'Logging in...' : 'Log in'}
              </Button>
            </form>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Don't have an account?{' '}
              <a href="/signup" className="text-primary hover:underline">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    )
}