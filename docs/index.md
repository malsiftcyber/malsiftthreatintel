# Malsift - Cyber Threat Intelligence Platform

Welcome to Malsift, a comprehensive cyber threat intelligence aggregation platform that combines multiple data sources, advanced analytics, and machine learning to provide actionable threat intelligence.

## 🚀 Key Features

### 🔍 **Threat Intelligence Aggregation**
- **20+ Data Sources**: CISA, AlienVault OTX, VirusTotal, Crowdstrike, Mandiant, Recorded Future, and more
- **Real-Time Updates**: Continuous monitoring and data collection
- **Automated Deduplication**: Intelligent merging and confidence scoring
- **Dark Web Monitoring**: Tor-based scraping of underground sources

### 🤖 **Machine Learning & AI**
- **Threat Scoring**: ML-based risk assessment and prioritization
- **Anomaly Detection**: Identify unusual patterns and behaviors
- **Predictive Analytics**: Forecast emerging threats and trends
- **LLM-Powered Analysis**: AI-driven indicator analysis with ChatGPT/Claude

### 🛡️ **EDR Integration**
- **Multi-Platform Support**: Crowdstrike Falcon, SentinelOne, Microsoft Defender
- **Intelligent Analysis**: Compare EDR indicators against threat intelligence
- **LLM Evaluation**: AI analysis of unknown indicators for malicious potential
- **Automated Response**: Actionable recommendations based on analysis

### 📊 **Feed Comparison Analysis**
- **Dynamic Comparison**: Real-time percentage comparison between open source and premium feeds
- **Overlap Analysis**: Identify unique indicators from each feed type
- **Cost-Benefit Analysis**: Evaluate the value of premium vs. open source intelligence
- **Trend Analysis**: Track changes in feed coverage over time

### 🔐 **Advanced Authentication**
- **Multi-Factor Authentication**: TOTP support with Google/Microsoft Authenticator
- **Azure AD Integration**: Enterprise SSO with OAuth2
- **JWT Tokens**: Secure session management
- **Role-Based Access Control**: Granular permissions and user management

### 🔒 **Enterprise Security**
- **SSL/TLS Encryption**: Let's Encrypt and custom certificate support
- **Security Headers**: Comprehensive security middleware
- **Rate Limiting**: API protection and abuse prevention
- **Audit Logging**: Complete activity tracking and compliance

### 📈 **Analytics & Monitoring**
- **Real-Time Dashboard**: Live threat intelligence overview
- **Interactive Charts**: Comprehensive data visualization
- **Prometheus Metrics**: Application performance monitoring
- **Grafana Dashboards**: Customizable monitoring and alerting

## 🏗️ Architecture

```mermaid
graph TB
    subgraph "Data Sources"
        A[CISA] --> E[Data Aggregation Layer]
        B[AlienVault OTX] --> E
        C[VirusTotal] --> E
        D[Crowdstrike] --> E
        F[SentinelOne] --> E
        G[Microsoft Defender] --> E
        H[Dark Web Sources] --> E
    end
    
    subgraph "Processing Layer"
        E --> I[Deduplication Engine]
        I --> J[ML Threat Scoring]
        J --> K[Feed Comparison Analysis]
        K --> L[EDR Integration]
        L --> M[LLM Analysis]
    end
    
    subgraph "Storage Layer"
        M --> N[PostgreSQL Database]
        M --> O[Redis Cache]
        M --> P[File Storage]
    end
    
    subgraph "API Layer"
        N --> Q[REST API]
        O --> Q
        P --> Q
    end
    
    subgraph "Frontend"
        Q --> R[React Dashboard]
        Q --> S[Authentication UI]
        Q --> T[Analytics Interface]
    end
    
    subgraph "Security Layer"
        U[SSL/TLS] --> Q
        V[Rate Limiting] --> Q
        W[Authentication] --> Q
        X[Authorization] --> Q
    end
```

## 🚀 Quick Start

### Prerequisites
- Docker and Docker Compose
- Python 3.9+
- Node.js 18+
- PostgreSQL 13+
- Redis 6+

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/malsiftcyber/malsiftthreatintel.git
   cd malsiftthreatintel
   ```

2. **Configure environment**
   ```bash
   cp backend/.env.example backend/.env
   # Edit backend/.env with your configuration
   ```

3. **Start the application**
   ```bash
   docker-compose up -d
   ```

4. **Access the application**
   - Frontend: http://localhost:3000
   - API Documentation: http://localhost:8000/docs
   - Grafana Dashboard: http://localhost:3001

### Enable SSL (Production)
```bash
# Let's Encrypt SSL
./scripts/ssl-setup.sh --type letsencrypt --domain your-domain.com --email your-email@domain.com

# Custom SSL Certificate
./scripts/ssl-setup.sh --type custom --domain your-domain.com
```

### Configure Authentication
1. **Set up MFA**: Enable TOTP authentication in user settings
2. **Configure Azure AD**: Add Azure AD configuration for enterprise SSO
3. **Create API Keys**: Generate API keys for programmatic access

## 📚 Documentation

### Core Features
- [Installation Guide](installation.md) - Complete setup instructions
- [Quick Start Guide](quick-start.md) - Get up and running quickly
- [API Reference](api/overview.md) - Comprehensive API documentation
- [Authentication](auth/overview.md) - Security and authentication guide

### Advanced Features
- [EDR Integration](features/edr-integration.md) - Endpoint detection and response integration
- [Feed Comparison Analysis](features/feed-comparison.md) - Advanced analytics and comparison
- [Machine Learning](advanced/ml-threat-scoring.md) - AI and ML capabilities
- [Custom Feed Parsers](advanced/custom-parsers.md) - Extensible parsing system

### Deployment & Operations
- [SSL Configuration](deployment/ssl.md) - SSL/TLS setup and management
- [Docker Deployment](deployment/docker.md) - Containerized deployment
- [Monitoring](deployment/monitoring.md) - Metrics and observability
- [Troubleshooting](troubleshooting/common-issues.md) - Common problems and solutions

### Development
- [Development Setup](development/setup.md) - Developer environment setup
- [Contributing](development/contributing.md) - How to contribute
- [Testing](development/testing.md) - Testing guidelines and practices
- [API Development](development/api-development.md) - Building and extending APIs

## 🔧 Configuration

### Environment Variables
```bash
# Database
DATABASE_URL=postgresql://user:pass@localhost/malsift
REDIS_URL=redis://localhost:6379

# Authentication
SECRET_KEY=your-secret-key
JWT_ALGORITHM=HS256
JWT_EXPIRE_MINUTES=30

# LLM Integration
OPENAI_API_KEY=your-openai-key
ANTHROPIC_API_KEY=your-anthropic-key

# SSL Configuration
SSL_CERT_PATH=/path/to/cert.pem
SSL_KEY_PATH=/path/to/key.pem
```

### Docker Compose Services
- **Backend**: FastAPI application server
- **Frontend**: React web application
- **PostgreSQL**: Primary database
- **Redis**: Caching and session storage
- **Celery**: Background task processing
- **Nginx**: Reverse proxy and SSL termination
- **Prometheus**: Metrics collection
- **Grafana**: Monitoring dashboards

## 🛡️ Security Features

### SSL/TLS Security
- **Let's Encrypt Integration**: Automatic certificate management
- **Custom Certificates**: Support for enterprise certificates
- **HSTS**: HTTP Strict Transport Security
- **Security Headers**: Comprehensive security middleware

### Authentication & Authorization
- **Multi-Factor Authentication**: TOTP with QR code generation
- **Azure AD Integration**: Enterprise single sign-on
- **JWT Tokens**: Secure session management
- **Role-Based Access**: Granular permission system

### API Security
- **Rate Limiting**: Configurable request limits
- **CORS Protection**: Cross-origin request security
- **Input Validation**: Comprehensive data validation
- **Audit Logging**: Complete activity tracking

## 📊 Monitoring & Analytics

### Real-Time Metrics
- **Threat Indicators**: Live count and trends
- **Feed Performance**: Source reliability and latency
- **API Usage**: Request rates and response times
- **System Health**: Resource utilization and performance

### Grafana Dashboards
- **Threat Intelligence Overview**: Comprehensive threat landscape
- **System Performance**: Infrastructure monitoring
- **User Activity**: Authentication and usage patterns
- **Cost Analysis**: LLM usage and associated costs

## 🤝 Contributing

We welcome contributions from the community! Please see our [Contributing Guide](development/contributing.md) for details on how to get started.

### Development Setup
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

### Code Standards
- **Python**: PEP 8 compliance with Black formatting
- **TypeScript**: ESLint configuration with strict typing
- **Documentation**: Comprehensive docstrings and comments
- **Testing**: Unit and integration test coverage

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: Comprehensive guides and API reference
- **Issues**: GitHub Issues for bug reports and feature requests
- **Discussions**: GitHub Discussions for questions and community support
- **Security**: Report security vulnerabilities to security@malsiftcyber.com

## 🎯 Roadmap

### Upcoming Features
- **Additional EDR Platforms**: Support for more endpoint detection tools
- **Advanced ML Models**: Enhanced threat scoring and prediction
- **Mobile Applications**: iOS and Android apps for monitoring
- **Integration APIs**: Third-party platform integrations
- **Cloud Deployment**: AWS, Azure, and GCP deployment options

### Community Goals
- **Open Source Ecosystem**: Build a thriving community of contributors
- **Industry Partnerships**: Collaborate with security vendors and researchers
- **Educational Resources**: Training materials and certification programs
- **Research Collaboration**: Academic partnerships and threat research

---

**Malsift** - Empowering organizations with intelligent threat intelligence and advanced security analytics.
