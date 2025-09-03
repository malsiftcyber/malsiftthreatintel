# Malsift Documentation

Welcome to the comprehensive documentation for Malsift, a powerful cyber threat intelligence aggregation platform.

## 🚀 Quick Start

Get up and running with Malsift in minutes:

1. **Installation**: Follow our [installation guide](installation.md) for detailed setup instructions
2. **Quick Start**: Use our [quick start guide](quick-start.md) for rapid deployment
3. **Configuration**: Configure your environment and API keys
4. **First Login**: Access the platform with default admin credentials

## 📚 Documentation Sections

### Getting Started
- **[Installation Guide](installation.md)** - Complete setup and deployment instructions
- **[Quick Start Guide](quick-start.md)** - Get up and running quickly
- **[Configuration](configuration.md)** - Environment and system configuration

### User Guide
- **[Dashboard Overview](user-guide/dashboard.md)** - Understanding the main dashboard
- **[Feed Management](user-guide/feeds.md)** - Managing threat intelligence feeds
- **[Indicator Analysis](user-guide/indicators.md)** - Working with threat indicators
- **[Feed Comparison Analysis](user-guide/feed-comparison.md)** - Comparing open source vs premium feeds
- **[Exclusion Management](user-guide/exclusions.md)** - Managing indicator exclusions
- **[Dark Web Monitoring](user-guide/darkweb.md)** - Dark web intelligence gathering

### Authentication & Security
- **[Authentication Overview](auth/overview.md)** - Complete authentication system guide
- **[Multi-Factor Authentication](auth/mfa.md)** - Setting up MFA
- **[Azure AD Integration](auth/azure-ad.md)** - Enterprise SSO configuration
- **[User Management](auth/users.md)** - Managing users and roles

### API Reference
- **[API Overview](api/overview.md)** - REST API documentation
- **[Authentication](api/auth.md)** - API authentication methods
- **[Indicators API](api/indicators.md)** - Threat indicator endpoints
- **[Feeds API](api/feeds.md)** - Feed management endpoints
- **[Feed Comparison API](api/feed-comparison.md)** - Feed comparison endpoints

### Advanced Features
- **[Machine Learning](advanced/ml.md)** - Threat scoring and AI features
- **[Custom Feed Parsers](advanced/parsers.md)** - Creating custom feed parsers
- **[Dark Web Scraping](advanced/darkweb.md)** - Advanced dark web monitoring
- **[Exclusion System](advanced/exclusions.md)** - Advanced exclusion management

### Development
- **[Architecture Overview](development/architecture.md)** - System architecture
- **[Development Setup](development/setup.md)** - Setting up development environment
- **[API Development](development/api.md)** - Extending the API
- **[Frontend Development](development/frontend.md)** - React frontend development

### Deployment
- **[Docker Deployment](deployment/docker.md)** - Containerized deployment
- **[SSL Configuration](deployment/ssl.md)** - SSL certificate setup
- **[Production Setup](deployment/production.md)** - Production deployment guide
- **[Monitoring](deployment/monitoring.md)** - System monitoring and alerting

### Troubleshooting
- **[Common Issues](troubleshooting/common-issues.md)** - Frequently encountered problems
- **[Performance Tuning](troubleshooting/performance.md)** - Optimizing system performance
- **[Debugging](troubleshooting/debugging.md)** - Debugging techniques
- **[Support](troubleshooting/support.md)** - Getting help and support

## 🏗️ Architecture

```mermaid
graph TB
    subgraph "Frontend"
        A[React Dashboard]
        B[Feed Management]
        C[Indicator Analysis]
        D[Feed Comparison]
    end
    
    subgraph "Backend API"
        E[FastAPI]
        F[Authentication]
        G[Feed Comparison Service]
        H[ML Threat Scoring]
    end
    
    subgraph "Data Layer"
        I[PostgreSQL]
        J[Redis]
        K[Custom Parsers]
    end
    
    subgraph "External Sources"
        L[Open Source Feeds]
        M[Premium Feeds]
        N[Dark Web Sources]
    end
    
    A --> E
    B --> E
    C --> E
    D --> E
    E --> F
    E --> G
    E --> H
    E --> I
    E --> J
    E --> K
    K --> L
    K --> M
    K --> N
```

## �� Key Features

### Feed Comparison Analysis
- **Dynamic Comparison**: Real-time analysis of open source vs premium feeds
- **Coverage Metrics**: Percentage overlap and unique indicator analysis
- **Trend Analysis**: Historical comparison data and patterns
- **Source Breakdown**: Individual source performance evaluation
- **Type Analysis**: Comparison by indicator type (IP, domain, URL, hash)

### Comprehensive Threat Intelligence
- **Multi-Source Aggregation**: Collect from 20+ threat intelligence sources
- **Intelligent Deduplication**: Advanced deduplication with confidence scoring
- **Real-time Updates**: Continuous feed monitoring and updates
- **Custom Parsers**: Support for organization-specific sources

### Advanced Security
- **Multi-Factor Authentication**: TOTP support with authenticator apps
- **Azure AD Integration**: Enterprise SSO with automatic user provisioning
- **SSL/TLS Support**: Let's Encrypt and custom certificate support
- **Role-Based Access Control**: Granular permissions and user management

### Machine Learning & AI
- **Threat Scoring**: ML-based threat level assessment
- **Anomaly Detection**: Identify unusual patterns and potential threats
- **Predictive Analytics**: Forecast threat trends and patterns
- **Feature Engineering**: Advanced feature extraction from threat data

## 📊 Dashboard Overview

The Malsift dashboard provides comprehensive insights into your threat intelligence:

### Main Dashboard
- **Key Metrics**: Total indicators, active sources, threat levels
- **Feed Comparison**: Open source vs premium feed analysis
- **Threat Distribution**: Visual breakdown of threat levels
- **Indicator Types**: Distribution by IP, domain, URL, hash
- **Recent Activity**: Latest updates and changes

### Feed Comparison Dashboard
- **Coverage Analysis**: Percentage overlap between feed types
- **Trend Analysis**: Historical comparison data
- **Source Performance**: Individual source evaluation
- **Type Breakdown**: Comparison by indicator type
- **Insights**: Automated recommendations and insights

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

## 🚀 Quick Commands

### Installation
```bash
# Clone repository
git clone https://github.com/rebaker501/malsift.git
cd malsift

# Start services
docker-compose up -d

# Initialize database
docker-compose exec backend alembic upgrade head

# Create admin user
docker-compose exec backend python -m app.scripts.create_admin
```

### SSL Setup
```bash
# Let's Encrypt
./scripts/ssl-setup.sh -d your-domain.com -e your-email@domain.com

# Custom SSL
./scripts/ssl-setup.sh -d your-domain.com -t custom
```

### API Usage
```bash
# Login
curl -X POST http://localhost:8000/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username": "admin", "password": "admin123"}'

# Get feed comparison
curl -H "Authorization: Bearer YOUR_TOKEN" \
  http://localhost:8000/api/v1/feed-comparison/overview?days=30
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](../CONTRIBUTING.md) for details.

### Development Setup
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests and documentation
5. Submit a pull request

## 📞 Support

- **Documentation**: This comprehensive documentation site
- **Issues**: Report bugs and feature requests on [GitHub](https://github.com/rebaker501/malsift/issues)
- **Discussions**: Join the conversation on [GitHub Discussions](https://github.com/rebaker501/malsift/discussions)
- **Email**: Contact us at support@malsift.com

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.
