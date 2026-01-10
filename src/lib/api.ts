// API Client for SMIRROR Solutions Backend

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export interface ApiResponse<T = any> {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
}

class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    try {
      const url = `${this.baseUrl}${endpoint}`;
      const response = await fetch(url, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        return {
          success: false,
          error: data.error || `HTTP error! status: ${response.status}`,
        };
      }

      return data;
    } catch (error: any) {
      console.error('API request error:', error);
      return {
        success: false,
        error: error.message || 'Network error. Please try again.',
      };
    }
  }

  // Contact API
  async submitContact(data: {
    name: string;
    email: string;
    phone?: string;
    company?: string;
    message: string;
    service?: string;
    budget?: string;
  }): Promise<ApiResponse> {
    return this.request('/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  // Referral API
  async submitReferral(data: {
    referrerName: string;
    referrerEmail: string;
    referrerPhone?: string;
    companyName?: string;
    clientName?: string;
    clientEmail?: string;
    clientPhone?: string;
    message?: string;
  }): Promise<ApiResponse> {
    return this.request('/referral', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  // Feedback API
  async submitFeedback(data: {
    name: string;
    email: string;
    phone?: string;
    company?: string;
    rating: number;
    message: string;
  }): Promise<ApiResponse> {
    return this.request('/feedback', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  // Support API
  async submitSupport(data: {
    name: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
    category?: string;
  }): Promise<ApiResponse> {
    return this.request('/support', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  // Internship API
  async submitInternship(data: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    university?: string;
    course?: string;
    yearOfStudy?: string;
    skills?: string;
    motivation: string;
    portfolioUrl?: string;
    resumeUrl?: string;
  }): Promise<ApiResponse> {
    return this.request('/internship', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  // Career API
  async submitCareer(data: {
    position: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    experience?: string;
    skills?: string;
    coverLetter?: string;
    resumeUrl?: string;
    portfolioUrl?: string;
  }): Promise<ApiResponse> {
    return this.request('/career', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  // Get average rating
  async getAverageRating(): Promise<ApiResponse<{ averageRating: number }>> {
    return this.request('/feedback/rating', {
      method: 'GET',
    });
  }
}

export const apiClient = new ApiClient(API_BASE_URL);
export default apiClient;
