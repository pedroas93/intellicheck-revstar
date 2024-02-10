import { User } from '../types';
import apiClient from './apiClient';

export const createUser = async (userData: Omit<User, 'id'>): Promise<User> => {
  const response = await apiClient.post<User>('/users', userData);

  return response.data;
};

export const fetchUsers = async (): Promise<User[]> => {
  const response = await apiClient.get<User[]>('/users');

  return response.data;
};

export const fetchUserById = async (id: string): Promise<User> => {
  const response = await apiClient.get<User>(`/users/${id}`);

  return response.data;
};

export const updateUser = async (id: string, userData: Partial<User>): Promise<User> => {
  const response = await apiClient.put<User>(`/users/${id}`, userData);

  return response.data;
};

export const deleteUser = async (id: string): Promise<void> => {
  await apiClient.delete(`/users/${id}`);
};
