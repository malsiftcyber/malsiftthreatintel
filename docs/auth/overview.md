# Authentication Overview

Malsift provides a comprehensive authentication system supporting multiple authentication methods and security features.

## Authentication Methods

### 1. Internal Authentication
- **Username/Password**: Traditional login with bcrypt password hashing
- **User Registration**: Self-service user registration
- **Password Management**: Secure password reset and change functionality
- **Session Management**: JWT token-based sessions with refresh tokens

### 2. Azure AD Integration
- **Enterprise SSO**: Single Sign-On with Azure Active Directory
- **Automatic Provisioning**: Users created automatically from Azure AD
- **OAuth2 Flow**: Secure OAuth2 authorization code flow
- **Role Mapping**: Map Azure AD groups to Malsift roles

### 3. Multi-Factor Authentication (MFA)
- **TOTP Support**: Time-based One-Time Password (TOTP)
- **Authenticator Apps**: Google Authenticator, Microsoft Authenticator
- **QR Code Setup**: Easy setup with QR code scanning
- **Backup Codes**: Recovery codes for account access

## Security Features

### JWT Token Management
- **Access Tokens**: Short-lived tokens (30 minutes default)
- **Refresh Tokens**: Long-lived tokens (7 days default)
- **Token Rotation**: Automatic token refresh
- **Token Revocation**: Secure logout and session termination

### Session Management
- **Session Tracking**: Monitor active sessions
- **Session Revocation**: Revoke individual sessions
- **Concurrent Sessions**: Support for multiple active sessions
- **Session Expiration**: Automatic session cleanup

### Role-Based Access Control (RBAC)
- **User Roles**: Admin, User, and custom roles
- **Permission System**: Granular permission control
- **Resource Access**: Control access to features and data
- **Audit Logging**: Track permission changes

## API Authentication

### Authentication Flow
1. **Login**: POST `/api/v1/auth/login` with credentials
2. **Token Response**: Receive access and refresh tokens
3. **API Requests**: Include `Authorization: Bearer <token>` header
4. **Token Refresh**: Use refresh token to get new access token
5. **Logout**: POST `/api/v1/auth/logout` to invalidate tokens

### Example API Usage
```bash
# Login
curl -X POST http://localhost:8000/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username": "admin", "password": "admin123"}'

# Use access token
curl -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  http://localhost:8000/api/v1/indicators

# Refresh token
curl -X POST http://localhost:8000/api/v1/auth/refresh \
  -H "Content-Type: application/json" \
  -d '{"refresh_token": "YOUR_REFRESH_TOKEN"}'
```

## Configuration

### Environment Variables
```env
# JWT Settings
SECRET_KEY=your-secret-key-here
ACCESS_TOKEN_EXPIRE_MINUTES=30
REFRESH_TOKEN_EXPIRE_DAYS=7

# Azure AD Settings
AZURE_AD_TENANT_ID=your-tenant-id
AZURE_AD_CLIENT_ID=your-client-id
AZURE_AD_CLIENT_SECRET=your-client-secret
AZURE_AD_REDIRECT_URI=https://your-domain.com/auth/azure-ad/callback
```

### Database Tables
- **users**: User accounts and profiles
- **roles**: Role definitions and permissions
- **user_sessions**: Active user sessions
- **mfa_attempts**: MFA setup and verification
- **azure_ad_config**: Azure AD configuration

## User Management

### Default Roles
- **Admin**: Full system access and user management
- **User**: Basic access to indicators and feeds
- **Analyst**: Enhanced access to threat intelligence data

### User Operations
- **Registration**: Self-service user registration
- **Profile Management**: Update user information
- **Password Changes**: Secure password updates
- **Account Deactivation**: Disable user accounts

## MFA Setup

### Setup Process
1. **Enable MFA**: User initiates MFA setup
2. **Generate Secret**: System generates TOTP secret
3. **QR Code**: Display QR code for authenticator app
4. **Verification**: User enters code to verify setup
5. **Backup Codes**: Generate recovery codes

### Authenticator Apps
- **Google Authenticator**: Most popular TOTP app
- **Microsoft Authenticator**: Microsoft's authenticator
- **Authy**: Multi-device authenticator
- **1Password**: Password manager with TOTP

## Azure AD Integration

### Setup Process
1. **Azure Portal**: Create app registration
2. **Configuration**: Set redirect URIs and permissions
3. **Environment Variables**: Configure Azure AD settings
4. **Testing**: Test authentication flow
5. **User Provisioning**: Configure automatic user creation

### Azure AD Features
- **Single Sign-On**: Seamless enterprise authentication
- **Group Mapping**: Map Azure AD groups to roles
- **Automatic Provisioning**: Create users automatically
- **Conditional Access**: Azure AD conditional access policies

## Security Best Practices

### Password Security
- **Strong Passwords**: Enforce password complexity
- **Password History**: Prevent password reuse
- **Account Lockout**: Lock accounts after failed attempts
- **Password Expiration**: Regular password changes

### Token Security
- **Short Expiration**: Keep access tokens short-lived
- **Secure Storage**: Store tokens securely
- **Token Rotation**: Regular token refresh
- **Revocation**: Immediate token invalidation

### Session Security
- **HTTPS Only**: Require HTTPS for all authentication
- **Secure Cookies**: Use secure and httpOnly cookies
- **Session Timeout**: Automatic session expiration
- **Concurrent Sessions**: Limit active sessions

## Troubleshooting

### Common Issues
- **Invalid Credentials**: Check username and password
- **Token Expired**: Refresh access token
- **MFA Issues**: Verify authenticator app setup
- **Azure AD Errors**: Check Azure AD configuration

### Debugging
- **Logs**: Check authentication logs
- **Token Validation**: Verify token payload
- **Database**: Check user and session records
- **Network**: Verify API connectivity

## Support

For authentication issues:
1. Check the [Troubleshooting Guide](../troubleshooting/common-issues.md)
2. Review authentication logs
3. Verify configuration settings
4. Open an issue on [GitHub](https://github.com/rebaker501/malsift/issues)
