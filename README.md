# Malsift - Cyber Threat Intelligence Aggregation Platform

## 🎨 Branding

### Logo
The Malsift logo features a distinctive design that represents the platform's mission:

- **Hooded Figure**: Represents the mysterious and hidden nature of cyber threats
- **Glowing Red Eyes**: Symbolizes constant vigilance and threat detection
- **Network Structure**: The molecular/network symbol on the figure's chest represents the interconnected nature of threat intelligence and data analysis
- **Dark Theme**: Reflects the cybersecurity domain and the need for stealth in threat hunting

Multiple logo variants are available:
- `logo.svg` - Full logo with text (200x80px)
- `logo-text.svg` - Text-only version for smaller spaces (120x40px)
- `favicon.svg` - Favicon version (32x32px)

## 🚀 Features

### Multi-Source Intelligence Aggregation
- **Government Sources**: CISA Known Exploited Vulnerabilities, FBI Cyber Division feeds, DHS Automated Indicator Sharing
- **Open Source Sources**: AlienVault OTX, MISP, OpenPhish, PhishTank, URLhaus (Abuse.ch)
- **Commercial Sources**: VirusTotal, ThreatFox, IBM X-Force Exchange, Recorded Future, CrowdStrike Falcon (free tiers)
- **Custom Feed Support**: Add any threat intelligence source with custom parsers

### 🔒 SSL Certificate Support
- **Let's Encrypt Integration**: Free, automatic SSL certificate generation and renewal
- **Custom SSL Certificates**: Support for certificates from any Certificate Authority
- **Nginx Reverse Proxy**: SSL termination with security headers and rate limiting
- **Automatic Renewal**: Cron jobs for certificate renewal (90-day expiration)
- **Security Headers**: HSTS, CSP, X-Frame-Options, and other security enhancements
- **HTTP/2 Support**: Modern protocol for improved performance

### 🔐 Comprehensive Authentication System
- **Internal Login System**: Username/password authentication with bcrypt hashing
- **Azure AD Integration**: Enterprise SSO with OAuth2 and automatic user provisioning
- **Multi-Factor Authentication**: TOTP support with Google/Microsoft Authenticator
- **JWT Tokens**: Secure session management with access and refresh tokens
- **Role-Based Access Control**: Granular permissions and user management
- **Session Management**: Secure session handling with automatic logout
- **Password Management**: Secure password reset and change functionality

### Advanced Deduplication System
- **Intelligent Normalization**: IP addresses, domains, URLs, hashes, emails
- **Confidence Score Merging**: Automatically merges duplicate indicators with highest confidence
- **Tag Consolidation**: Combines tags and metadata from multiple sources
- **Duplicate Tracking**: Comprehensive reporting on duplicate detection and resolution

### Dark Web Monitoring
- **Tor Integration**: Built-in Tor proxy support for dark web access
- **Configurable Scraping**: Set custom intervals and source management
- **Content Extraction**: Advanced parsing and indicator extraction from dark web content
- **Source Management**: Add, configure, and monitor dark web sources

### Machine Learning & AI
- **Threat Scoring**: ML-based threat level assessment and prioritization
- **Anomaly Detection**: Identify unusual patterns and potential threats
- **Feature Engineering**: Advanced feature extraction from threat data
- **Model Management**: Train, update, and monitor ML models

### Modern Web Interface
- **React + TypeScript**: Modern, responsive frontend with Tailwind CSS
- **Real-time Dashboard**: Live statistics and threat level distributions
- **Advanced Filtering**: Search, filter, and sort indicators by multiple criteria
- **Feed Management**: Visual interface for managing threat intelligence sources

### Indicator Exclusion System
- **Flexible Pattern Matching**: Exact, regex, and wildcard pattern support
- **Bulk Import**: Import exclusion lists from CSV/JSON files
- **Pattern Testing**: Test exclusion patterns before applying
- **Audit Trail**: Track all exclusion changes and modifications

### Custom Feed Parsers
- **Dynamic Parser Loading**: Load custom Python parsers at runtime
- **Multiple Format Support**: JSON, CSV, XML, and custom formats
- **Parser Management**: Upload, configure, and manage custom parsers
- **Error Handling**: Robust error handling and validation

## 🛠️ Technology Stack

### Backend
- **FastAPI**: Modern Python web framework for APIs
- **PostgreSQL**: Primary database with advanced querying
- **Redis**: Caching and message queue for Celery
- **SQLAlchemy**: ORM for database operations
- **Alembic**: Database migrations
- **Celery**: Background task processing
- **Prometheus**: Metrics collection and monitoring

### Frontend
- **React 18**: Modern UI framework with hooks
- **TypeScript**: Type-safe JavaScript development
- **Tailwind CSS**: Utility-first CSS framework
- **React Query**: Data fetching and caching
- **React Router**: Client-side routing
- **Recharts**: Data visualization and charts

### Security & SSL
- **Nginx**: Reverse proxy with SSL termination
- **Let's Encrypt**: Free SSL certificate automation
- **Certbot**: Certificate management and renewal
- **Security Headers**: Comprehensive security hardening
- **Rate Limiting**: Protection against abuse

### Authentication
- **JWT**: JSON Web Tokens for secure authentication
- **bcrypt**: Secure password hashing
- **pyotp**: TOTP-based multi-factor authentication
- **Azure AD**: Enterprise SSO integration
- **Session Management**: Secure session tracking

### Monitoring & Observability
- **Grafana**: Metrics visualization and dashboards
- **Prometheus**: Time-series metrics database
- **Loguru**: Structured logging
- **Health Checks**: Application health monitoring

## 🚀 Quick Start

### Prerequisites
- Docker and Docker Compose
- Domain name (for SSL setup)
- At least 4GB RAM

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/rebaker501/malsift.git
   cd malsift
   ```

2. **Configure environment**
   ```bash
   cp backend/.env.example backend/.env
   # Edit backend/.env with your settings
   ```

3. **Start services**
   ```bash
   # Standard deployment
   docker-compose up -d
   
   # SSL-enabled deployment
   ./scripts/ssl-setup.sh -d your-domain.com -e your-email@domain.com
   ```

4. **Initialize database**
   ```bash
   docker-compose exec backend alembic upgrade head
   docker-compose exec backend python -m app.scripts.create_admin
   ```

5. **Access the application**
   - **Standard**: http://localhost:3000
   - **SSL**: https://your-domain.com

## 🔐 Authentication Setup

### Default Admin Account
After installation, use these default credentials:
- **Username**: `admin`
- **Password**: `admin123`

**Important**: Change these credentials immediately after first login!

### Internal Authentication
The system includes a complete internal authentication system:
- User registration and management
- Password hashing with bcrypt
- JWT token-based sessions
- Role-based access control

### Azure AD Integration (Optional)
1. **Create Azure AD App Registration**:
   - Go to Azure Portal > App Registrations
   - Create new registration
   - Set redirect URI: `https://your-domain.com/auth/azure-ad/callback`

2. **Configure Environment Variables**:
   ```env
   AZURE_AD_TENANT_ID=your-tenant-id
   AZURE_AD_CLIENT_ID=your-client-id
   AZURE_AD_CLIENT_SECRET=your-client-secret
   AZURE_AD_REDIRECT_URI=https://your-domain.com/auth/azure-ad/callback
   ```

3. **Enable in Web Interface**:
   - Go to Authentication settings
   - Enable Azure AD integration
   - Configure allowed domains

### Multi-Factor Authentication (Optional)
1. **Enable MFA for Your Account**:
   - Go to your profile settings
   - Enable Multi-Factor Authentication
   - Scan QR code with Google/Microsoft Authenticator

2. **Complete Setup**:
   - Enter verification code from authenticator
   - Save backup codes for recovery

## 📚 Documentation

- **[Installation Guide](docs/installation.md)**: Complete setup instructions
- **[Quick Start Guide](docs/quick-start.md)**: Get up and running quickly
- **[API Documentation](docs/api/overview.md)**: Comprehensive API reference
- **[SSL Setup Guide](docs/deployment/ssl.md)**: SSL certificate configuration
- **[Authentication Guide](docs/auth/overview.md)**: Login and MFA setup

## 🔧 Configuration

### Environment Variables

Key configuration options in `backend/.env`:

```env
# Database
DATABASE_URL=postgresql://user:password@localhost/malsift

# Security
SECRET_KEY=your-secret-key-here
ACCESS_TOKEN_EXPIRE_MINUTES=30
REFRESH_TOKEN_EXPIRE_DAYS=7

# SSL Configuration
DOMAIN=your-domain.com
SSL_TYPE=letsencrypt  # or custom

# Azure AD (optional)
AZURE_AD_TENANT_ID=your-tenant-id
AZURE_AD_CLIENT_ID=your-client-id
AZURE_AD_CLIENT_SECRET=your-client-secret
AZURE_AD_REDIRECT_URI=https://your-domain.com/auth/azure-ad/callback

# API Keys (optional)
VIRUSTOTAL_API_KEY=your-vt-api-key
ALIENVAULT_API_KEY=your-otx-api-key
THREATFOX_API_KEY=your-threatfox-api-key
```

### SSL Configuration

#### Let's Encrypt (Recommended)
```bash
./scripts/ssl-setup.sh -d your-domain.com -e your-email@domain.com
```

#### Custom SSL Certificate
```bash
# Place certificates
cp your-cert.crt nginx/ssl/cert.pem
cp your-key.key nginx/ssl/key.pem

# Run setup
./scripts/ssl-setup.sh -d your-domain.com -t custom
```

## 📊 API Authentication

### JWT Token Authentication
All API endpoints require authentication using JWT tokens:

```bash
# Login to get tokens
curl -X POST http://localhost:8000/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username": "admin", "password": "admin123"}'

# Use access token in requests
curl -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  http://localhost:8000/api/v1/indicators
```

### Authentication Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/v1/auth/login` | Internal login |
| POST | `/api/v1/auth/refresh` | Refresh access token |
| POST | `/api/v1/auth/logout` | Logout and invalidate token |
| POST | `/api/v1/auth/register` | Register new user |
| GET | `/api/v1/auth/me` | Get current user info |
| POST | `/api/v1/auth/mfa/setup` | Setup MFA |
| POST | `/api/v1/auth/mfa/verify` | Verify MFA code |
| POST | `/api/v1/auth/azure-ad/login` | Azure AD login |
| GET | `/api/v1/auth/azure-ad/login-url` | Get Azure AD login URL |

## 📈 Monitoring

### Health Checks
```bash
# API health
curl http://localhost:8000/health

# SSL certificate status
./scripts/renew-ssl.sh --dry-run
```

### Metrics & Dashboards
- **Grafana**: http://localhost:3001 (admin/admin)
- **Prometheus**: http://localhost:9090
- **Application Metrics**: Available via Prometheus endpoints

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Setup
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests and documentation
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: [Comprehensive docs](https://rebaker501.github.io/malsift/)
- **Issues**: Report bugs and feature requests on [GitHub](https://github.com/rebaker501/malsift/issues)
- **Discussions**: Join the conversation on [GitHub Discussions](https://github.com/rebaker501/malsift/discussions)

## 🔄 Changelog

See [CHANGELOG.md](CHANGELOG.md) for a detailed history of changes and updates.
