package entity;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Table;

@Entity
@Table(name = "customer")
public class Customer implements Serializable {

    @Id
    @Column(name = "id")
    private int id;

    @Column(name = "full_name", length = 100, nullable = false)
    private String full_name;

    @Column(name = "mobile", length = 10, nullable = false)
    private String mobile;

    @Column(name = "nic", length = 20, nullable = false)
    private String nic;

    @Column(name = "username", length = 15, nullable = false)
    private String username;

    @Column(name = "password", length = 15, nullable = false)
    private String password;
    
    @Column(name = "reg_no", length = 5, nullable = false)
    private String reg_no;
    
    @JoinColumn(name = "status_id",nullable = false)
    private Status status_id;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFull_name() {
        return full_name;
    }

    public void setFull_name(String full_name) {
        this.full_name = full_name;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getNic() {
        return nic;
    }

    public void setNic(String nic) {
        this.nic = nic;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getReg_no() {
        return reg_no;
    }

    public void setReg_no(String reg_no) {
        this.reg_no = reg_no;
    }

    public Status getStatus_id() {
        return status_id;
    }

    public void setStatus_id(Status status_id) {
        this.status_id = status_id;
    }

}
